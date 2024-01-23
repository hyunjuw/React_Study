import React from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function RuleIntro() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-title">환경 정의</h3>
        <table className="guide-table v-table">
          <caption>환경 정의</caption>
          <tbody>
            <tr>
              <th scope="row">문서 및 버전</th>
              <td>HTML5, SCSS, CSS, Javascript</td>
            </tr>
            <tr>
              <th scope="row">인코딩</th>
              <td>UTF-8</td>
            </tr>
            <tr>
              <th scope="row">웹 유형</th>
              <td>Mobile Web</td>
              {/* <td>PC Web, Mobile Web, Responcive Web</td> */}
            </tr>
            <tr>
              <th scope="row">해상도 범위</th>
              <td>최저: 360 ~ </td>
              {/* <td>Mobile 360 ~ 767px, Tablet: 768px ~ 1023px, Desktop: 1024 ~ 1920</td> */}
            </tr>
            <tr>
              <th scope="row">타겟 디바이스</th>
              <td>360 * 776 (Galaxy S20)</td>
              {/* <td>Mobile 375px, Table: 960px, Desktop: 1024px</td> */}
            </tr>
          </tbody>
        </table>
      </section>
      <section className="section">
        <h3 className="section-title">파일/폴더 규칙</h3>
        <ul className="list-dot">
          <li>스네이크 표기법(underbar_nate)을 사용한다.</li>
        </ul>
        <div className="table-wrap">
          <table className="guide-table v-table h-table">
            <caption>파일/폴더 규칙</caption>
            <thead>
              <tr>
                <th scope="col" colSpan={2}>
                  분류 폴더
                </th>
                <th scope="col">구분 폴더</th>
                <th scope="col">파일 이름</th>
                <th scope="col">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">views</th>
                <td>pages</td>
                <td>category</td>
                <td>*.html</td>
                <td>페이지</td>
              </tr>
              <tr>
                <th scope="row" rowSpan={6}>
                  assets
                </th>
                <td>scss</td>
                <td></td>
                <td>
                  _common.scss
                  <br />
                  _font.scss
                  <br />
                  _layout.scss
                  <br />
                  _reset.scss
                  <br />
                  _util.scss
                  <br />
                  _value.scss
                  <br />
                  style.scss
                  <br />
                </td>
                <td>
                  공통
                  <br />
                  글꼴
                  <br />
                  레이아웃
                  <br />
                  리셋
                  <br />
                  유틸
                  <br />
                  변수정의
                  <br />
                  전체스타일
                </td>
              </tr>
              <tr>
                <td>css</td>
                <td></td>
                <td>*.css</td>
                <td>컴파일 된 css파일</td>
              </tr>
              <tr>
                <td>fonts</td>
                <td></td>
                <td>.eot / .woff / .ttp / .otp</td>
                <td>글꼴</td>
              </tr>
              <tr>
                <td rowSpan={2}>images</td>
                <td rowSpan={2}>
                  @temp
                  <br />
                  icon
                  <br />
                  visual
                </td>
                <td>.gif / .jpg / .png</td>
                <td>
                  임시이미지
                  <br />
                  아이콘
                  <br />
                  비주얼 이미지
                </td>
              </tr>
              <tr>
                <td className="td-line">@.gif / @.jpg / @.png</td>
                <td>임시 이미지</td>
              </tr>
              <tr>
                <td>js</td>
                <td></td>
                <td>*.js</td>
                <td>퍼블 모듈</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default RuleIntro;
