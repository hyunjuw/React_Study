/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-children-prop */
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
import { getRandomId } from "@components/uu-components/RandomString";

interface AccordionProps {
  arrow?: boolean;
  only?: boolean;
  children: React.ReactNode;
}
interface AccordionContextProps {
  parent?: parentProps;
  state?: accStateType;
  activeStatus?: boolean;
  disabled?: boolean;
  isActive?: boolean;
  changeParent?: (updateVisible: boolean[]) => void;
  open?: () => void;
}
interface parentProps {
  count: number;
  active: number | null;
  visible: boolean[];
  arrow: boolean;
  only: boolean;
  child: ItemProps[];
}
interface accStateType {
  index?: number;
  isOpen?: boolean;
}
interface ItemProps {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

interface childrenProps {
  children: React.ReactNode;
}
const randomString = getRandomId();
const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined,
);

export function Accordion({
  children,
  arrow = false,
  only = false,
}: AccordionProps) {
  const child = React.Children.map(children as JSX.Element, (child) => {
    return child.props as ItemProps;
  });
  const [parent, setParent] = useState<parentProps>({
    count: 0,
    active: null,
    only: only ? true : false,
    arrow: arrow ? true : false,
    child: child,
    visible: [],
  });

  useEffect(() => {
    child.map((item, i) => {
      parent.visible.push(item.active ? true : false);
    });
  }, []);

  const changeParent = (updateVisible: boolean[]) => {
    setParent({ ...parent, visible: updateVisible });

    console.log(parent.visible);
  };

  return (
    <AccordionContext.Provider value={{ parent, changeParent }}>
      <div
        className={`accordion${parent.only ? " is-only" : ""}${
          parent.arrow ? " is-arrow" : ""
        }`}
        role="tablist"
      >
        {/* {child.map((item, i) => {
          return (
            <Accordion.Item
              key={i}
              active={parent.visible[i]}
              disabled={item.disabled}
            >
              {item.children}
            </Accordion.Item>
          );
        })} */}
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

Accordion.Item = function AccordionItem({
  children,
  active = false,
  disabled = false,
}: ItemProps) {
  const { parent, changeParent } = useContext(AccordionContext)!;
  const [acc, setAcc] = useState({ ...parent });
  const [state, setState] = useState<accStateType>({
    index: parent && parent.count++,
    isOpen: false,
  });

  const visible = useMemo(() => {
    return acc.active === state.index; // false: open, true: close
  }, [acc]);

  // const activeStatus = useMemo(() => {
  //   return visible
  //     ? setAcc({ ...acc, active: state.index })
  //     : setAcc({ ...acc, active: null });
  // }, [visible]);

  // const openStatus = useMemo(() => {
  //   return acc.only
  //     ? visible
  //       ? setState({ ...state, isOpen: true })
  //       : setState({ ...state, isOpen: false })
  //     : setState({ ...state, isOpen: !state.isOpen });
  // }, [visible]);

  useEffect(() => {
    active
      ? setAcc({ ...acc, active: state.index })
      : setAcc({ ...acc, active: null });
  }, []);

  useEffect(() => {
    setAcc({ ...acc, active: state.index });
  }, [state]);

  useEffect(() => {
    acc.visible &&
      state.index &&
      setState({
        ...state,
        isOpen: acc.visible[state.index],
      });
    console.log(state);
  }, [acc.visible]);

  const open = () => {
    setState({ ...state, isOpen: !state.isOpen });
    if (acc.only) {
      if (acc.active === state.index) {
        setAcc({
          ...acc,
          active: state.index,
          visible: acc.visible?.map((item, i, arr) => {
            item = false;
            return (arr[i] = state.index === i);
          }),
        });
        // changeParent && acc.visible && changeParent(acc.visible);
      }
    }
    console.log(acc);

    // if (acc.only) {
    //   setAcc({ ...acc, active: state.index });
    //   setAcc({
    //     ...acc,
    //     visible: acc.visible?.filter((item, i) => {
    //       acc.active === i ? (item = true) : (item = false);
    //       return item;
    //     }),
    //   });
    //   console.log(acc.visible);
    // if (visible) {
    //   // setState({ ...state, isOpen: !state.isOpen });
    //   setAcc({ ...acc, active: state.index });
    // } else {
    //   setState({ ...state, isOpen: !state.isOpen });
    // }
    // } else {
    //   setState({ ...state, isOpen: !state.isOpen });
    // }
    // state.only
    //   ? visible
    //     ? setAcc({ ...acc, active: null }) // open
    //     : setAcc({ ...acc, active: state.index }) // close
    //   : setState({ ...state, multiVisible: true });
    // console.log(state);
  };
  // const startTransition = (el: Element) => {
  //   (el as HTMLDivElement).style.height = el.scrollHeight + "px";
  // };
  // const endTransition = (el: Element) => {
  //   (el as HTMLDivElement).style.height = "";
  // };
  return (
    <AccordionContext.Provider value={{ open, state, disabled }}>
      <div
        className={`accordion-item${state.isOpen ? " is-active" : ""}${
          disabled ? " is-disabled" : ""
        }`}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
Accordion.Header = function AccordionHeader({ children }: childrenProps) {
  const { parent, disabled, open, state } = useContext(AccordionContext)!;

  return (
    <div className="accordion-header">
      {parent?.arrow && <span className="accordion-title">{children}</span>}
      <button
        id={`acc-btn-${randomString}`}
        type="button"
        className="accordion-btn"
        disabled={disabled}
        aria-expanded={state?.isOpen}
        aria-controls={`acc-panel-${randomString}`}
        onClick={open}
      >
        {!parent?.arrow && <span className="accordion-title">{children}</span>}
        <span
          className={`icon ${
            disabled ? "icon-16-arrow-disabled" : "icon-16-arrow"
          }`}
          aria-label={state?.isOpen ? "열림" : "닫힘"}
        ></span>
      </button>
    </div>
  );
};
Accordion.Body = function AccordionBody({ children }: childrenProps) {
  const { state } = useContext(AccordionContext)!;
  // console.log(activeStatus);
  return (
    <>
      {state?.isOpen && (
        <div
          id={`acc-panel-${randomString}`}
          className={`accordion-body ${state.isOpen ? "open" : "close"}`}
          role="region"
          aria-labelledby={`acc-btn-${randomString}`}
        >
          <div className="accordion-content">{children}</div>
        </div>
      )}
    </>
  );
};
