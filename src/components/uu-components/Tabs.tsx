import React, {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  KeyboardEvent,
} from "react";
import { getRandomId } from "@components/uu-components/RandomString";
type TabsProps = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  add?: JSX.Element;
  isActive?: (i: number) => void;
};

function Tabs({ children, add, isActive }: PropsWithChildren<TabsProps>) {
  const randomString = getRandomId();
  const tab = React.Children.map(children as JSX.Element, (child) => {
    return child.props;
  });
  const [selected, setSelected] = useState<number>(0);
  const tabBtns = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    tab.map((item, i) => {
      item.active && setSelected(i);
      item.active && isActive && isActive(i);
    });
  }, []);

  useEffect(() => {
    tabBtns.current[selected].focus();
  }, [selected]);

  const tabChange = (i: number) => {
    setSelected(i);
    tabBtns.current[i].focus();
    isActive && isActive(i);
  };

  // 접근성
  const a11yTabs = (e: KeyboardEvent) => {
    const btns = tabBtns.current;
    let idx = selected;
    if (e.key === "ArrowLeft") {
      idx = idx - 1 >= 0 ? idx - 1 : btns.length - 1;
      while (btns[idx].getAttribute("disabled") !== null) {
        idx = idx - 1 >= 0 ? idx - 1 : btns.length - 1;
      }
    }
    if (e.key === "ArrowRight") {
      idx = idx + 1 <= btns.length - 1 ? idx + 1 : 0;
      while (btns[idx].getAttribute("disabled") !== null) {
        idx = idx + 1 <= btns.length - 1 ? idx + 1 : 0;
      }
    }
    tabChange(idx);
  };

  return (
    <div className="tab">
      <div className="tab-link" role="tablist">
        {tab.map((item, i) => {
          return (
            <button
              id={`tabBtn${randomString}${i}`}
              ref={(el) => (el ? (tabBtns.current[i] = el) : null)}
              key={`tabBtn${randomString}${i}`}
              className={`tab-link-btn ${
                i === selected && !item.disabled ? "is-active" : ""
              }`}
              type="button"
              role="tab"
              aria-controls={`tab-panel${randomString}${i}`}
              aria-selected={
                i === selected && !item.disabled ? "true" : "false"
              }
              tabIndex={i === selected && !item.disabled ? 0 : -1}
              disabled={item.disabled ? true : false}
              onClick={() => tabChange(i)}
              onKeyUp={(e) => a11yTabs(e)}
            >
              {item.title}
            </button>
          );
        })}
        {add}
      </div>
      <div className="tab-content">
        {tab.map((item, i) => {
          return (
            <div
              id={`tab-panel${randomString}${i}`}
              key={`tab-panel${randomString}${i}`}
              className={`tab-content-panel ${
                i === selected && !item.disabled ? "is-active" : ""
              }`}
              role="tabpanel"
              aria-labelledby={`tabBtn` + randomString + i}
              tabIndex={0}
            >
              <div className="tab-panel-inner">{item.children}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Tabs;
