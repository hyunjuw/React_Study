import React, { useEffect, useState, useRef, ReactElement } from "react";
// import PropTypes from "prop-types";
// import { getRandomId } from "@/components/uu-components/RandomString";
import type { TabType } from "@components/uu-components/Tab";
type TabsProps = {
  add?: React.JSX.Element;
  children: React.ReactNode;
};

function Tabs({ children }: TabsProps): React.ReactElement {
  const tabChildren = React.Children.map(children, (child, index) => {
    return child;
  });
  const [tab, setTab] = useState<[]>([]);

  tabChildren?.map((item: TabType) => {
    tab.push(item);
  });

  // tabChildren?.forEach((item) => {
  //   setTab(item);
  // });

  console.log(tab);
  // // console.log(tab.props.title);
  // if (tab !== undefined || tab !== null) {
  //   tab.map((item) => {
  //     console.log(item.props.title);
  //   });
  // }

  return (
    <div className="tab">
      <div className="tab-link" role="tablist">
        {tab?.map((item) => {
          <button type="button" className="tab-link-btn" role="tab">
            {item.props.title}
          </button>;
        })}
      </div>
      <div className="tab-content">{tab}</div>
    </div>
  );
}
export default Tabs;
