import React from "react";
import GuidePage from "@guide/components/layout/GuidePage";
import Tabs from "@components/uu-components/Tabs";
import Tab from "@components/uu-components/Tab";

function GuideTab() {
  const example = {
    html: true,
    script: false,
    show: false,
    code: `
      {/* Tab */}
      <Tabs isActive={isActive}>
        <Tab title={<div>div탭 제목</div>}>탭 내용1</Tab>
        <Tab title="Tab2" active>
          탭 내용2
        </Tab>
        <Tab title="Tab3">탭 내용3</Tab>
      </Tabs>
      {/* Tab */}
      `,
  };
  const components = `
  import Tabs from "@components/uu-components/Tabs";
  import Tab from "@components/uu-components/Tab";
  `;
  const props = `
  // Tabs
  type TabsProps = {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
    add?: JSX.Element;
    isActive?: (i: number) => void;
  };

  // Tab
  type TabProps = {
    title: string;
    key: number;
    active?: boolean;
    disabled?: boolean;
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  };
  // Default
  Tab.defaultProps = {
    title: "Tab",
    key: 0,
    active: false,
    disabled: false,
    children: <></>,
  };
  `;
  const events = `
  // Html
  <Tabs isActive={isActive}>

  // Script
  const isActive = (i: number) => {
    console.log(i);
  };
  `;
  const script = `
  const isActive = (i: number) => {
    console.log(i);
  };
  `;
  const markup = `
  {/* Tab */}
  <Tabs isActive={isActive}>
    <Tab title={Tab1}>탭 내용1</Tab>
    <Tab title="Tab2">탭 내용2</Tab>
    <Tab title="Tab3">탭 내용3</Tab>
  </Tabs>
  {/* Tab */}
  `;
  const isActive = (i: number) => {
    console.log(`activeTab: ${i}`);
  };

  return (
    <GuidePage
      example={example}
      components={components}
      props={props}
      events={events}
      script={script}
      markup={markup}
    >
      {/* Tab */}
      <Tabs isActive={isActive}>
        <Tab title={<div>div탭 제목</div>}>탭 내용1</Tab>
        <Tab title="Tab2" active>
          탭 내용2
        </Tab>
        <Tab title="Tab3">탭 내용3</Tab>
      </Tabs>
      {/* Tab */}
    </GuidePage>
  );
}
export default GuideTab;
