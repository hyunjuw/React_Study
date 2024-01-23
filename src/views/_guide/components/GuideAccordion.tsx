import React from "react";
import GuidePage from "@guide/components/layout/GuidePage";
import { Accordion } from "@components/uu-components/Accordion";
// import AccordionItem from "@components/uu-components/AccordionItem";

function GuideAccordion() {
  const example = {
    html: true,
    script: false,
    show: false,
    code: `
    {/* Accordion */}
    <Accordion>
      <AccordionItem header={<div>제목1</div>}>내용1</AccordionItem>
      <AccordionItem header="제목2" active>
        내용2
      </AccordionItem>
      <AccordionItem header="제목3">내용3</AccordionItem>
    </Accordion>
    {/* Accordion */}

    {/* Accordion only */}
    <Accordion only>
      <AccordionItem header={<span>제목1</span>}>내용1</AccordionItem>
      <AccordionItem header="제목2" active>
        내용2
      </AccordionItem>
      <AccordionItem header="제목3">내용3</AccordionItem>
    </Accordion>
    {/* Accordion only */}

    {/* Accordion arrow */}
    <Accordion arrow>
      <AccordionItem header={<span>제목1</span>}>내용1</AccordionItem>
      <AccordionItem header="제목2" active>
        내용2
      </AccordionItem>
      <AccordionItem header="제목3">내용3</AccordionItem>
    </Accordion>
    {/* Accordion arrow */}
    `,
  };
  const components = `
  import Accordion from "@components/uu-components/Accordion";
  import AccordionItem from "@components/uu-components/AccordionItem";
  `;
  const props = `
  // Accordion
  type AccordionProps = {
    only?: boolean;
    arrow?: boolean;
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  };
  // AccordionItem
  type AccordionItemProps = {
    active?: boolean;
    disabled?: boolean;
    header: string | JSX.Element;
    children: React.ReactNode;
  };
  // Default
  Accordion.defaultProps = {
    only: false,
    arrow: false,
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
  const isActive = (i: number, id: string) => {
    console.log(`activeAccordion ID: ${id}, activeAccordion Index: ${i}`);
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
      <article className="article">
        <h4 className="section-subtitle">Default</h4>
        {/* Accordion */}
        <Accordion only>
          <Accordion.Item>
            <Accordion.Header>header1</Accordion.Header>
            <Accordion.Body>body1</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item active>
            <Accordion.Header>header2</Accordion.Header>
            <Accordion.Body>body2</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item disabled>
            <Accordion.Header>header3</Accordion.Header>
            <Accordion.Body>body3</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* Accordion
      </article>
      <article className="article">
        <h4 className="section-subtitle">only</h4>
        {/* Accordion only */}
        {/* <Accordion only onClick={isActive} key="accordion02">
          <AccordionItem header={<span>제목1</span>}>내용1</AccordionItem>
          <AccordionItem header="제목2" active>
            내용2
          </AccordionItem>
          <AccordionItem header="제목3">내용3</AccordionItem>
        </Accordion> */}
        {/* Accordion only */}
      </article>

      <article className="article">
        <h4 className="section-subtitle">arrow</h4>
        {/* Accordion arrow */}
        {/* <Accordion arrow onClick={isActive} key="accordion03">
          <AccordionItem header={<span>제목1</span>}>내용1</AccordionItem>
          <AccordionItem header="제목2" active>
            내용2
          </AccordionItem>
          <AccordionItem header="제목3">내용3</AccordionItem>
        </Accordion> */}
        {/* Accordion arrow */}
      </article>
    </GuidePage>
  );
}
export default GuideAccordion;
