import React from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function RuleCode() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-title">HTML 기본 규칙</h3>
        <h4 className="section-subtitle">코드 들여쓰기</h4>
        <ul className="list-dot">
          <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 2칸으로 설정한다.</li>
        </ul>
        <PrismCode
          html
          code={`
          <!doctype html>
          <html lang="ko"></html>
            <head>...</head>
            <body>
              <div id="wrap">...</div>
            </body>
          </html>
        `}
        ></PrismCode>
      </section>
      <section className="section">
        <h3 className="section-title">주석/빈줄</h3>
        <ul className="list-dot">
          <li>
            가독성을 고려하여 빈 줄을 추가한다. 단, 1줄을 초과하지 않는다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
          <!-- header -->
          <header id="header">...</header>
          <!-- // header -->

          <!-- content -->
          <div id="content">...</div>
          <!-- // content -->

          <!-- footer -->
          <footer id="footer">...</footer>
          <!-- // footer -->
        `}
        ></PrismCode>
      </section>
      <section className="section">
        <h3 className="section-title">CSS 기본 규칙</h3>
        <h4 className="section-subtitle">들여쓰기/줄 바꿈</h4>
        <ul className="list-dot">
          <li>CSS 코드 작성시 들여쓰기는 허용하지 않는다.</li>
          <li>
            공통으로 사용되는 속성의 선택자간의 줄 바꿈은 허용하며 이 외의
            줄바꿈은 허용하지 않는다.
          </li>
        </ul>
        <PrismCode
          css
          code={`
          div.className-name {margin: 0.5em 0 0 0;font-size: 1.25em;letter-spacing: -0.1rem;}

          .className-name,
          .className-name .child-className {background: url(../img/img.gif) no-repeat;}
        `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">코드 들여쓰기</h4>
        <ul className="list-dot">
          <li>1탭 들여쓰기 하며, 1탭의 크기는 공백 2칸으로 설정한다.</li>
        </ul>
        <PrismCode
          html
          code={`
          <!doctype html>
          <html lang="ko">
            <head>...</head>
            <body>
              <div id="wrap">...</div>
            </body>
          </html>
        `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">선택자</h4>
        <ul className="list-dot">
          <li>
            &apos;*&apos; 공통 선택자는 웹 페이지의 성능을 저하를 가져오기
            때문에 가급적 사용하지 않는다.
          </li>
        </ul>
        <PrismCode
          css
          code={`
          /* 잘못된 예 */
          * {margin: 0;padding: 0;}
        `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">속성의 선언 순서</h4>
        <div className="table-wrap">
          <table className="guide-table v-table h-table">
            <caption>CSS 속성선언순서</caption>
            <colgroup>
              <col style={{ width: 20 + "%" }} />
              <col style={{ width: 20 + "%" }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">속성</th>
                <th scope="col">속성 값</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" rowSpan={2}>
                  1. 표시
                </th>
                <td>display</td>
                <td>
                  none, block, inline, inline-block, inline-table, list-item,
                  table, table-caption, table-cell, table-column,
                  table-column-group, table-footer-group, table-header-group,
                  table-row, table-row-group, flex
                </td>
              </tr>
              <tr>
                <td className="td-line">visibility</td>
                <td>visible, hidden, collapse</td>
              </tr>
              <tr>
                <th scope="row" rowSpan={2}>
                  2. 넘침/흐름
                </th>
                <td>overflow</td>
                <td>visible, hidden, scroll, auto</td>
              </tr>
              <tr>
                <td className="td-line">float</td>
                <td>left, right, none</td>
              </tr>
              <tr>
                <th scope="row" rowSpan={3}>
                  3. 위치
                </th>
                <td>position</td>
                <td>absolute, fixed, relative, static</td>
              </tr>
              <tr>
                <td className="td-line">top, right, bottom, left</td>
                <td>length(px, rem, em, vh), %</td>
              </tr>
              <tr>
                <td className="td-line">z-index</td>
                <td>number</td>
              </tr>
              <tr>
                <th scope="row" rowSpan={4}>
                  4. 크기/간격
                </th>
                <td>width, max-width, min-width</td>
                <td>auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td className="td-line">height, max-height, min-height</td>
                <td className="td-line">auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td className="td-line">margin</td>
                <td className="td-line">auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <td className="td-line">padding</td>
                <td>auto, length(px, em, rem), %</td>
              </tr>
              <tr>
                <th scope="row" rowSpan={3}>
                  5. 박스모양
                </th>
                <td>border</td>
                <td>border-width, border-style, border-color</td>
              </tr>
              <tr>
                <td className="td-line">border-radius</td>
                <td>length(px, em, rem), %</td>
              </tr>
              <tr>
                <td className="td-line">background</td>
                <td>
                  background-color, background-image, background-repeat,
                  background-attachment, background-position, background-size
                </td>
              </tr>
              <tr>
                <th scope="row" rowSpan={4}>
                  6. 글꼴/정렬
                </th>
                <td className="td-line">font</td>
                <td className="td-line">
                  font-style, font-variant, font-weigth, font-size/line-height,
                  font-family, letter-spacing
                </td>
              </tr>
              <tr>
                <td className="td-line">color</td>
                <td>hex_number</td>
              </tr>
              <tr>
                <td className="td-line">text-align</td>
                <td>left, right, center, justify</td>
              </tr>
              <tr>
                <td className="td-line">vertical-align</td>
                <td>top, middle, bottom, baseline</td>
              </tr>
              <tr>
                <th scope="row">7. 기타</th>
                <td></td>
                <td>언급되지 않은 속성들은 후순위로 적용한다.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default RuleCode;
