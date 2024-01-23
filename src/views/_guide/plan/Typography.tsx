import React from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function Typography() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-subtitle">Font Family</h3>
        <div className="font-exam">
          <div className="font-area">
            <h5 className="font-area-title">Noto Sans Korean</h5>
            <div className="font-box">
              <span className="font-light">노토 산스 코리안</span>
              <span className="font-light">NotoSansKorean</span>
              <span className="font-light">DemiLight</span>
            </div>
            <div className="font-box">
              <span className="font-regular">노토 산스 코리안</span>
              <span className="font-regular">NotoSansKorean</span>
              <span className="font-regular">Regular</span>
            </div>
            <div className="font-box">
              <span className="font-medium">노토 산스 코리안</span>
              <span className="font-medium">NotoSansKorean</span>
              <span className="font-medium">Medium</span>
            </div>
            <div className="font-box">
              <span className="font-bold">노토 산스 코리안</span>
              <span className="font-bold">NotoSansKorean</span>
              <span className="font-bold">Bold</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Font Weight</h3>
        <div className="font-exam">
          <div className="font-area">
            <div className="font-box">
              <span className="font-light">$fontLight</span>
              <span className="font-light">300</span>
            </div>
            <div className="font-box">
              <span className="font-regular">$fontRegular</span>
              <span className="font-regular">400</span>
            </div>
            <div className="font-box">
              <span className="font-medium">$fontMedium</span>
              <span className="font-medium">500</span>
            </div>
            <div className="font-box">
              <span className="font-bold">$fontBold</span>
              <span className="font-bold">700</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <h3 className="section-subtitle">Font Size</h3>
        <div className="font-exam">
          <div className="font-area">
            <div className="font-box">
              <span className="h1">h1</span>
              <span className="h1">3.2rem</span>
            </div>
            <div className="font-box">
              <span className="h2">h2</span>
              <span className="h2">2.6rem</span>
            </div>
            <div className="font-box">
              <span className="h3">h3</span>
              <span className="h3">2rem</span>
            </div>
            <div className="font-box">
              <span className="h4">h4</span>
              <span className="h4">1.8rem</span>
            </div>
            <div className="font-box">
              <span className="h5">h5</span>
              <span className="h5">1.6rem</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Typography;
