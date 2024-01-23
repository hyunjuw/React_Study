import React, { PropsWithChildren, useState } from "react";

type TabProps = {
  title: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  key: number;
  active?: boolean;
  disabled?: boolean;
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
};
Tab.defaultProps = {
  title: "Tab",
  key: 0,
  active: false,
  disabled: false,
  children: <></>,
};
function Tab({
  title,
  key,
  active,
  disabled,
  children,
}: PropsWithChildren<TabProps>) {
  const tab = useState({
    title: title,
    key: key,
    active: active,
    disabled: disabled,
    children: children,
  });
  console.log(tab);
  return <></>;
}

export default Tab;
