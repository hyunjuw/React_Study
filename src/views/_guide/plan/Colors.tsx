import React from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function Colors() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-subtitle">Primary color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-primary1">
              <dt>$primary1</dt>
              <dd>#DAE2FF</dd>
            </dl>
            <dl className="bg-primary2">
              <dt>$primary2</dt>
              <dd>#91A8FF</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Sub color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-secondary1">
              <dt>$secondary1</dt>
              <dd>#9AA1AA</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Grayscale color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-white">
              <dt className="text-black">$white</dt>
              <dd className="text-black">#FFFFFF</dd>
            </dl>
            <dl className="bg-grayeee">
              <dt className="text-black">$grayeee</dt>
              <dd className="text-black">#EEEEEE</dd>
            </dl>
            <dl className="bg-grayddd">
              <dt className="text-black">$grayddd</dt>
              <dd className="text-black">#DDDDDD</dd>
            </dl>
            <dl className="bg-grayccc">
              <dt className="text-black">$grayccc</dt>
              <dd className="text-black">#CCCCCC</dd>
            </dl>
            <dl className="bg-graybbb">
              <dt>$graybbb</dt>
              <dd>#BBBBBB</dd>
            </dl>
            <dl className="bg-grayaaa">
              <dt>$grayaaa</dt>
              <dd>#AAAAAA</dd>
            </dl>
            <dl className="bg-gray999">
              <dt>$gray999</dt>
              <dd>#999999</dd>
            </dl>
            <dl className="bg-gray666">
              <dt>$gray666</dt>
              <dd>#666666</dd>
            </dl>
            <dl className="bg-gray555">
              <dt>$gray555</dt>
              <dd>#555555</dd>
            </dl>
            <dl className="bg-gray333">
              <dt>$gray333</dt>
              <dd>#333333</dd>
            </dl>
            <dl className="bg-gray111">
              <dt>$gray111</dt>
              <dd>#333333</dd>
            </dl>
            <dl className="bg-black">
              <dt>$black</dt>
              <dd>#000000</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Background color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-bg1">
              <dt className="text-black">$bg1</dt>
              <dd className="text-black">#F3F5FC</dd>
            </dl>
            <dl className="bg-bg2">
              <dt className="text-black">$bg2</dt>
              <dd className="text-black">#F0F2F9</dd>
            </dl>
            <dl className="bg-bg3">
              <dt className="text-black">$bg3</dt>
              <dd className="text-black">#F2F5F8</dd>
            </dl>
            <dl className="bg-bg4">
              <dt className="text-black">$bg4</dt>
              <dd className="text-black">#E7E9EE</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Line color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-line1">
              <dt className="text-black">$line1</dt>
              <dd className="text-black">#DADDE1</dd>
            </dl>
            <dl className="bg-line2">
              <dt className="text-black">$line2</dt>
              <dd className="text-black">#E6E6E6</dd>
            </dl>
            <dl className="bg-line3">
              <dt className="text-black">$line3</dt>
              <dd className="text-black">#EEEEEE</dd>
            </dl>
            <dl className="bg-line4">
              <dt className="text-black">$line4</dt>
              <dd className="text-black">#C4CAD2</dd>
            </dl>
            <dl className="bg-line5">
              <dt>$line5</dt>
              <dd>#555555</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Text color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-text1">
              <dt>$text1</dt>
              <dd>#111111</dd>
            </dl>
            <dl className="bg-text2">
              <dt>$text2</dt>
              <dd>#666666</dd>
            </dl>
            <dl className="bg-text3">
              <dt>$text3</dt>
              <dd>#999999</dd>
            </dl>
            <dl className="bg-text4">
              <dt className="text-black">$text4</dt>
              <dd className="text-black">#CCCCCC</dd>
            </dl>
            <dl className="bg-text5">
              <dt className="text-black">$text5</dt>
              <dd className="text-black">#BBBBBB</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Active color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-active1">
              <dt>$active1</dt>
              <dd>#2E4295</dd>
            </dl>
            <dl className="bg-active2">
              <dt>$active2</dt>
              <dd>#6B737D</dd>
            </dl>
            <dl className="bg-active3">
              <dt className="text-black">$active3</dt>
              <dd className="text-black">#EAEEFF</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Disabled color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-disabled1">
              <dt className="text-black">$disabled1</dt>
              <dd className="text-black">#F8F8F8</dd>
            </dl>
            <dl className="bg-disabled2">
              <dt className="text-black">$disabled2</dt>
              <dd className="text-black">#D2D8E0</dd>
            </dl>
            <dl className="bg-disabled3">
              <dt className="text-black">$disabled3</dt>
              <dd className="text-black">#CCCCCC</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Error color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-error1">
              <dt>$error1</dt>
              <dd>#E02D23</dd>
            </dl>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Dimed color</h3>
        <div className="color-exam">
          <div className="color-area">
            <dl className="bg-dim1">
              <dt>$dim1</dt>
              <dd>rgba(0, 0, 0, 0.7)</dd>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Colors;
