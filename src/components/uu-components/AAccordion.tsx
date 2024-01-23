// import React, { PropsWithChildren, useEffect, useState, useRef } from "react";
// import { getRandomId } from "@components/uu-components/RandomString";
// import CSSTransition from "react-transition-group/Transition";

// type AccordionProps = {
//   key: string;
//   only?: boolean;
//   arrow?: boolean;
//   children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
//   onClick?: (i: number, id: string) => void;
// };
// type AccordionItemProps = {
//   active?: boolean;
//   disabled?: boolean;
//   header: string | JSX.Element;
//   children: React.ReactNode;
// };
// Accordion.defaultProps = {
//   only: false,
//   arrow: false,
// };

function AAccordion() {
  //   key,
  //   children,
  //   only,
  //   arrow,
  //   onClick,
  // }: PropsWithChildren<AccordionProps>) {
  //   const randomString = getRandomId();
  //   const child = React.Children.map(children as JSX.Element, (child) => {
  //     return child.props as AccordionItemProps;
  //   });
  //   const [parent, setParent] = useState<AccordionProps>({
  //     key: key,
  //     arrow: arrow,
  //     only: only,
  //     children: children,
  //   });
  //   const [state, setState] = useState({
  //     active: false,
  //     activeIndex: 0,
  //   });
  //   const nodeRef = useRef(null);
  //   const [panelActive, setPanelActive] = useState<boolean[]>([]);
  //   useEffect(() => {
  //     child.map((item, i) => {
  //       item.active ? setState({ ...state, activeIndex: i }) : null;
  //       setPanelActive((panelActive) => [
  //         ...panelActive,
  //         item.active ? true : false,
  //       ]);
  //     });
  //   }, []);
  //   const open = (index: number) => {
  //     setState({ ...state, activeIndex: index });
  //     panelActive.map((item, i) => {
  //       i === index
  //         ? (panelActive[index] = !item)
  //         : parent.only
  //           ? (panelActive[i] = false)
  //           : null;
  //     });
  //     onClick && onClick(index, randomString);
  //   };
  //   return (
  //     <div
  //       id={`accordion-${randomString}`}
  //       className={`accordion${only ? " is-only" : ""}${
  //         parent.arrow ? " is-arrow" : ""
  //       }`}
  //       role="tablist"
  //       key={parent.key}
  //     >
  //       {child.map((item, i) => {
  //         return (
  //           <>
  //             <div
  //               className={`accordion-item${
  //                 i === state.activeIndex ? " is-active" : ""
  //               }`}
  //               key={`acc-item-${randomString}${i}`}
  //             >
  //               <div className="accordion-header">
  //                 {parent.arrow && (
  //                   <span className="accordion-title">{item.header}</span>
  //                 )}
  //                 <button
  //                   id={`acc-header-${randomString}${i}`}
  //                   type="button"
  //                   className="accordion-btn"
  //                   disabled={item.disabled}
  //                   aria-expanded={panelActive[i] ? true : false}
  //                   aria-controls={`acc-panel-${randomString}${i}`}
  //                   onClick={() => open(i)}
  //                 >
  //                   {!parent.arrow && (
  //                     <span className="accordion-title">{item.header}</span>
  //                   )}
  //                   <span
  //                     className={`icon ${
  //                       item.disabled ? "icon-16-arrow-disabled" : "icon-16-arrow"
  //                     }`}
  //                     aria-label={panelActive[i] ? "열림" : "닫힘"}
  //                   ></span>
  //                 </button>
  //               </div>
  //             </div>
  //             {panelActive[i] && (
  //               <CSSTransition
  //                 nodeRef={nodeRef}
  //                 in={panelActive[i]}
  //                 timeout={300}
  //                 className="accordion-body"
  //                 onEnter={(el: Element) =>
  //                   ((el as HTMLDivElement).style.height = el.scrollHeight + "px")
  //                 }
  //                 onExited={(el: Element) =>
  //                   ((el as HTMLDivElement).style.height = "")
  //                 }
  //               >
  //                 <div
  //                   id={`acc-panel-${randomString}${i}`}
  //                   className="accordion-body"
  //                   role="region"
  //                   aria-labelledby={`acc-header-${randomString}${i}`}
  //                 >
  //                   <div className="accordion-content">{item.children}</div>
  //                 </div>
  //               </CSSTransition>
  //             )}
  //           </>
  //         );
  //       })}
  //     </div>
  //   );
}
export default AAccordion;
