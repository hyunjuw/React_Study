import React from "react";
export type TabsProps = {
  key?: number;
  title: string;
  children: React.ReactNode;
};
function Tab({ title, children }: TabsProps): React.ReactElement {
  return (
    <div className="tab-content-panel" role="tabpanel">
      <div className="tab-panel-inner">{children}</div>
    </div>
  );
}

export default Tab;
