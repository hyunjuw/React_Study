import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "@assets/css/prism.css";

type PrismCodeType = {
  code: string;
  language?: string;
  html?: boolean;
  css?: boolean;
  script?: boolean;
  show?: boolean;
};
PrismCode.defaultProps = {
  code: "",
  language: undefined,
  html: false,
  css: false,
  script: false,
  show: false,
};
function PrismCode({ code, language, html, css, script, show }: PrismCodeType) {
  const [open, setOpen] = useState<boolean>(false);
  const [codeLang, setCodeLang] = useState<string>("markup");

  useEffect(() => {
    Prism.highlightAll();
    show ? setOpen(true) : setOpen(false);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
    language !== undefined
      ? setCodeLang(language)
      : html && setCodeLang("markup");
    css && setCodeLang("css");
    script && setCodeLang("javascript");
  }, [open]);

  return (
    <>
      <div className={`view-code ${open && "is-open"}`}>
        <button
          type="button"
          className="btn-view-code"
          onClick={() => setOpen(!open)}
        >
          {html ? "Html " : ""}
          {css ? "Css " : ""}
          {script ? "Script " : ""}
          Code
          <i className="icon icon-12-arrow-gray" aria-hidden="true"></i>
        </button>
      </div>
      {open && (
        <pre>
          <code className={`language-${codeLang}`}>{code}</code>
        </pre>
      )}
    </>
  );
}
export default PrismCode;
