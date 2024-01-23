import React, { PropsWithChildren, useEffect, useState } from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

export type GuidePageType = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  example: {
    html?: boolean;
    script?: boolean;
    show?: boolean;
    code: string;
  };
  components?: string;
  props?: string;
  events?: string;
  script?: string;
  markup?: string;
  article?: boolean;
};

function GuidePage({
  children,
  example,
  components,
  props,
  events,
  script,
  markup,
  article,
}: PropsWithChildren<GuidePageType>) {
  const title = [
    "Examples",
    "Components",
    "Props",
    "Events",
    "Script",
    "Basic Markup",
  ];

  // const [exCode, setExCode] = useState<string>("");
  // useEffect(() => {
  //   example ? setExCode(String(children)) : setExCode("");
  // }, [example]);

  return (
    <div className="content-body">
      {title.map((tit, i) => {
        return (
          <section className="section" key={tit}>
            <h3 className="section-title">{tit}</h3>
            {i === 0 && children}
            {i === 0 && example !== undefined && (
              <PrismCode
                html={example.html}
                script={example.script}
                show={example.show}
                code={example.code}
              ></PrismCode>
            )}
            {i === 1 && <PrismCode script code={components} show></PrismCode>}
            {i === 2 && <PrismCode script code={props}></PrismCode>}
            {i === 3 && <PrismCode script code={events}></PrismCode>}
            {i === 4 && <PrismCode script code={script} show></PrismCode>}
            {i === 5 && <PrismCode html code={markup} show></PrismCode>}
          </section>
        );
      })}
    </div>
  );
}

export default GuidePage;
