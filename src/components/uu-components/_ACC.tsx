export const ACC = () => {};
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/no-children-prop */
// import React, { useEffect, useState, createContext, useContext } from "react";
// import { getRandomId } from "@components/uu-components/RandomString";

// interface AccordionProps {
//   arrow?: boolean;
//   only?: boolean;
//   children: React.ReactNode;
// }
// interface AccordionContextProps {
//   parent?: parentProps;
//   isActive: boolean[];
//   isDisabled?: boolean;
//   itemIndex?: number;
//   selected?: number;
//   toggleItem?: (index: number) => void;
//   changeIndex?: (index: number) => void;
// }
// interface parentProps {
//   arrow?: boolean;
//   only?: boolean;
//   child: ItemProps[];
// }
// interface ItemProps {
//   active?: boolean;
//   disabled?: boolean;
//   activeIndex?: number;
//   children: React.ReactNode;
// }
// interface childrenProps {
//   children: React.ReactNode;
//   active?: boolean;
//   activeIndex?: number;
//   selected?: number;
// }
// const randomString = getRandomId();
// const AccordionContext = createContext<AccordionContextProps | undefined>(
//   undefined,
// );

// export function Accordion({
//   children,
//   arrow = false,
//   only = false,
// }: AccordionProps) {
//   const child: parentProps["child"] = React.Children.map(
//     children as JSX.Element,
//     (child) => {
//       return child?.props;
//     },
//   );
//   const [parent, setParent] = useState({
//     only: only ? true : false,
//     arrow: arrow ? true : false,
//     child: child,
//   });
//   const [isActive, setIsActive] = useState<boolean[]>([]);
//   const [selected, setSelected] = useState();

//   useEffect(() => {
//     child.map((item, i) => {
//       setIsActive((isActive) => [...isActive, item.active ? true : false]);
//       item.active ? setSelected(i) : null;
//     });
//   }, []);

//   console.log(selected);

//   const changeIndex = (i: number) => {
//     setSelected(i);
//     console.log(i, selected);
//   };

//   return (
//     <AccordionContext.Provider
//       value={{ parent, isActive, changeIndex, selected }}
//     >
//       <div
//         className={`accordion${parent.only ? " is-only" : ""}${
//           parent.arrow ? " is-arrow" : ""
//         }`}
//         role="tablist"
//       >
//         {child.map((item, i) => {
//           return (
//             <Accordion.Item key={i} active={item.active} activeIndex={i}>
//               {item.children}
//             </Accordion.Item>
//           );
//         })}
//       </div>
//     </AccordionContext.Provider>
//   );
// }

// Accordion.Item = function AccordionItem({
//   children,
//   active = false,
//   disabled = false,
//   activeIndex = 0,
// }: ItemProps) {
//   // const {} = useContext(AccordionContext)!;
//   const [isOpen, setIsOpen] = useState<boolean>(active);
//   // const [selected, setSelected] = useState(0);
//   // const [isDisabled, setIsDisabled] = useState<boolean>(disabled);
//   const { isActive, changeIndex, selected } = useContext(AccordionContext)!; // boolean[]
//   const child: parentProps["child"] = React.Children.map(
//     children as JSX.Element,
//     (child) => {
//       return child?.props;
//     },
//   );

//   const toggleItem = (index: number) => {
//     isActive &&
//       isActive.map((item, i, arr) => {
//         index === i ? (arr[i] = true) : ((arr[i] = false), setIsOpen(false));
//       });
//   };

//   return (
//     <AccordionContext.Provider value={{ isActive, toggleItem, changeIndex }}>
//       <div
//         className={`accordion-item${active ? " is-active" : ""}${
//           disabled ? " is-disabled" : ""
//         }`}
//       >
//         {child.map((item, i) => {
//           return i === 0 ? (
//             <Accordion.Header key={i} activeIndex={activeIndex}>
//               {item.children}
//             </Accordion.Header>
//           ) : (
//             <Accordion.Body key={i} active={isOpen} activeIndex={activeIndex}>
//               {item.children}
//             </Accordion.Body>
//           );
//         })}
//       </div>
//     </AccordionContext.Provider>
//   );
// };
// Accordion.Header = function AccordionHeader({
//   children,
//   activeIndex,
// }: childrenProps) {
//   const { isDisabled, toggleItem } = useContext(AccordionContext)!;

//   return (
//     <div className="accordion-header">
//       {/* <span className="accordion-title">{children}</span> */}
//       <button
//         type="button"
//         className="accordion-btn"
//         disabled={isDisabled}
//         aria-expanded={true}
//         aria-controls={`acc-panel-${randomString}`}
//         onClick={() => toggleItem && toggleItem(activeIndex ? activeIndex : 0)}
//       >
//         <span className="accordion-title">{children}</span>
//         <span className={`icon`} aria-label={"열림"}></span>
//       </button>
//     </div>
//   );
// };
// Accordion.Body = function AccordionBody({ active, children }: childrenProps) {
//   const { changeIndex, selected } = useContext(AccordionContext)!; // boolean[]
//   // console.log(selected);

//   return (
//     <> {active && <div className={`accordion-body open`}>{children}</div>}</>
//   );
// };

// /* eslint-disable @typescript-eslint/no-non-null-assertion */
// /* eslint-disable react/no-children-prop */
// import React, { useEffect, useState, createContext, useContext } from "react";
// import { getRandomId } from "@components/uu-components/RandomString";
// import CSSTransition from "react-transition-group/Transition";

// interface AccordionProps {
//   arrow?: boolean;
//   only?: boolean;
//   children: React.ReactNode;
// }
// interface AccordionContextProps {
//   // isOnly?: boolean;
//   // isArrow?: boolean;
//   parent?: parentProps;
//   index?: number;
//   isActive?: boolean[];
//   changeIndex?: (i: number) => void;
//   isOpen?: boolean;
//   isDisabled?: boolean;
//   toggleItem?: (i: number) => void;
//   changeActive?: (index: number) => void;
// }
// interface parentProps {
//   arrow?: boolean;
//   only?: boolean;
//   child: ItemProps[];
// }
// interface ItemProps {
//   activeIndex?: number;
//   active?: boolean;
//   disabled?: boolean;
//   children: React.ReactNode;
// }
// interface childrenProps {
//   children: React.ReactNode;
//   activeIndex?: number;
// }
// const randomString = getRandomId();
// const AccordionContext = createContext<AccordionContextProps | undefined>(
//   undefined,
// );

// export function Accordion({
//   children,
//   arrow = false,
//   only = false,
// }: AccordionProps) {
//   const child: parentProps["child"] = React.Children.map(
//     children as JSX.Element,
//     (child) => {
//       return child?.props;
//     },
//   );
//   const [parent, setParent] = useState({
//     only: only ? true : false,
//     arrow: arrow ? true : false,
//     child: child,
//   });
//   const [isActive, setIsActive] = useState<boolean[]>([]);

//   useEffect(() => {
//     child.map((item) => {
//       setIsActive((isActive) => [...isActive, item.active ? true : false]);
//     });
//   }, []);

//   const changeActive = (index: number) => {
//     isActive.map((item, i, arr) => {
//       index === i ? (arr[i] = true) : (arr[i] = false);
//     });
//   };

//   return (
//     <AccordionContext.Provider value={{ parent, isActive, changeActive }}>
//       <div
//         className={`accordion${parent.only ? " is-only" : ""}${
//           parent.arrow ? " is-arrow" : ""
//         }`}
//         role="tablist"
//       >
//         {child.map((item, i) => {
//           return (
//             <Accordion.Item key={i} active={item.active} activeIndex={i}>
//               {item.children}
//             </Accordion.Item>
//           );
//         })}

//         {/* {children} */}
//       </div>
//     </AccordionContext.Provider>
//   );
// }

// Accordion.Item = function AccordionItem({
//   children,
//   active = false,
//   disabled = false,
//   activeIndex = 0,
// }: ItemProps) {
//   // const { parent } = useContext(AccordionContext)!;
//   const [isOpen, setIsOpen] = useState<boolean>(active);
//   const [isDisabled, setIsDisabled] = useState<boolean>(disabled);
//   const { isActive, changeActive } = useContext(AccordionContext)!;

//   const child: parentProps["child"] = React.Children.map(
//     children as JSX.Element,
//     (child) => {
//       return child?.props;
//     },
//   );

//   useEffect(() => {}, []);

//   const toggleItem = (i: number) => {
//     changeActive && changeActive(i);
//     console.log(isActive);
//   };

//   return (
//     <AccordionContext.Provider value={{ isDisabled, toggleItem }}>
//       <div
//         className={`accordion-item${isOpen ? " is-active" : ""}${
//           isDisabled ? " is-disabled" : ""
//         }`}
//       >
//         {child.map((item, i) => {
//           return i === 0 ? (
//             <Accordion.Header key={i} activeIndex={activeIndex}>
//               {item.children}
//             </Accordion.Header>
//           ) : (
//             <Accordion.Body key={i} activeIndex={activeIndex}>
//               {item.children}
//             </Accordion.Body>
//           );
//         })}
//       </div>
//     </AccordionContext.Provider>
//   );
// };
// Accordion.Header = function AccordionHeader({
//   children,
//   activeIndex,
// }: childrenProps) {
//   const { isOpen } = useContext(AccordionContext)!;
//   const { isDisabled } = useContext(AccordionContext)!;
//   const { toggleItem } = useContext(AccordionContext)!;
//   return (
//     <div className="accordion-header">
//       {/* <span className="accordion-title">{children}</span> */}
//       <button
//         type="button"
//         className="accordion-btn"
//         disabled={isDisabled}
//         aria-expanded={isOpen}
//         aria-controls={`acc-panel-${randomString}`}
//         onClick={() => toggleItem && toggleItem(activeIndex ? activeIndex : 0)}
//       >
//         <span className="accordion-title">{children}</span>
//         <span className={`icon`} aria-label={"열림"}></span>
//       </button>
//     </div>
//   );
// };
// Accordion.Body = function AccordionBody({
//   children,
//   activeIndex,
// }: childrenProps) {
//   const { isActive } = useContext(AccordionContext)!;
//   // console.log(isActive);

//   return isActive ? (
//     <div className={`accordion-body ${isActive ? "open" : "close"}`}>
//       {children}
//     </div>
//   ) : (
//     <></>
//   );
// };
