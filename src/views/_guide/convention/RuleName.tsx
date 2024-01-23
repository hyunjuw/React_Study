import React from "react";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function RuleName() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-title">표기법</h3>
        <div className="table-wrap">
          <table className="guide-table v-table h-table">
            <caption>네임 표기법</caption>
            <thead>
              <tr>
                <th scope="col">종류</th>
                <th scope="col">구분</th>
                <th scope="col">번호</th>
                <th scope="col">예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="align-l">
                  ID Selector
                </th>
                <td className="align-l">카멜 케이스 (camelCase)</td>
                <td className="align-l">한 자리수 (생략가능, 2, 3)</td>
                <td className="align-l">
                  errorMesage, controlCenter, controlCenter2
                </td>
              </tr>
              <tr>
                <th scope="row" className="align-l">
                  className Selector
                </th>
                <td className="align-l">케밥 케이스 (kebab-case)</td>
                <td className="align-l">한 자리수 (생략가능, 2, 3)</td>
                <td className="align-l">tab-page, tbl-type1, tbl-type2</td>
              </tr>
              <tr>
                <th scope="row" className="align-l">
                  Image
                </th>
                <td className="align-l">스네이크 케이스 (snake_case)</td>
                <td className="align-l">두 자리수 (01, 02, 03)</td>
                <td className="align-l">btn_cancle01_off.gif</td>
              </tr>
              <tr>
                <th scope="row" className="align-l">
                  CSS/JS 파일
                </th>
                <td className="align-l">카멜 케이스 (camelCase)</td>
                <td className="align-l">두 자리수 (01, 02, 03)</td>
                <td className="align-l">style.scss, guideInclude.js</td>
              </tr>
              <tr>
                <th scope="row" className="align-l">
                  HTML 파일
                </th>
                <td className="align-l">파스칼 케이스 (PascalCase)</td>
                <td className="align-l">두 자리수 (01, 02, 03)</td>
                <td className="align-l">RuleName.html</td>
              </tr>
              <tr>
                <th scope="row" className="align-l">
                  폴더
                </th>
                <td className="align-l">카멜 케이스 (camelCase)</td>
                <td className="align-l">한 자리수 (생략가능, 2, 3)</td>
                <td className="align-l">myCategory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <h4 className="section-subtitle">ID Selector</h4>
        <ul className="list-dot">
          <li>
            최상위 레이아웃, 폼 요소, 책갈피를 제외하고 id를 사용하지 않는다.
          </li>
        </ul>
        <div className="table-wrap">
          <table className="guide-table h-table">
            <caption>예약어</caption>
            <colgroup>
              <col span={2} style={{ width: 25 + `%` }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>예약어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={5}>사이트 레이아웃</td>
                <td>#wrap</td>
                <td>사이트 전체영역</td>
              </tr>
              <tr>
                <td className="td-line">#aside</td>
                <td>사이드 영역</td>
              </tr>
              <tr>
                <td className="td-line">#header</td>
                <td>머리글 영역</td>
              </tr>
              <tr>
                <td className="td-line">#content</td>
                <td>본문 영역</td>
              </tr>
              <tr>
                <td className="td-line">#footer</td>
                <td>바닥글 영역</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <h4 className="section-subtitle">className Selector</h4>
        <ul className="list-dot">
          <li>체인 선택자의 개수는 3개까지 권장한다.</li>
          <li>클래스 예약어는 상황에 맞게 선택적으로 참고한다.</li>
          <li>
            레이아웃에 한하여 정의된 예시이며, 자세한 내용은 설계가이드를
            참고한다.
          </li>
        </ul>
        <div className="table-wrap">
          <table className="guide-table h-table">
            <caption>예약어</caption>
            <colgroup>
              <col span={2} style={{ width: 25 + `%` }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>예약어</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={4}>네비게이션</td>
                <td>.nav</td>
                <td>전체 메뉴</td>
              </tr>
              <tr>
                <td className="td-line">.nav-main</td>
                <td>주 메뉴</td>
              </tr>
              <tr>
                <td className="td-line">.nav-sub</td>
                <td>서브 메뉴 (Sub Navigation Bar)</td>
              </tr>
              <tr>
                <td className="td-line">.aside</td>
                <td>사이드 메뉴</td>
              </tr>
              <tr>
                <td rowSpan={3}>컨텐츠 레이아웃</td>
                <td>.content</td>
                <td>본문 영역</td>
              </tr>
              <tr>
                <td className="td-line">.content-header</td>
                <td>본문 헤더 영역</td>
              </tr>
              <tr>
                <td className="td-line">.content-body</td>
                <td>본문 내용 영역</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="section">
        <h4 className="section-subtitle">이미지 네이밍</h4>
        <ul className="list-dot">
          <li>종류별로 스프라이트 방식을 적용한다.</li>
          <li>
            이미지 네이밍의 조합은 &apos;형태_의미_순서_상태&apos;의 순서로
            조합한다.
          </li>
        </ul>
        <div className="table-wrap">
          <table className="guide-table h-table">
            <caption>예약어</caption>
            <colgroup>
              <col span={2} style={{ width: 25 + `%` }} />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>분류</th>
                <th>파일명</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>버튼</td>
                <td>btn_</td>
                <td></td>
              </tr>
              <tr>
                <td>아이콘</td>
                <td>icon_</td>
                <td></td>
              </tr>
              <tr>
                <td>배경</td>
                <td>bg_</td>
                <td></td>
              </tr>
              <tr>
                <td>비주얼</td>
                <td>visual_</td>
                <td></td>
              </tr>
              <tr>
                <td>일반</td>
                <td>img_</td>
                <td></td>
              </tr>
              <tr>
                <td>임시</td>
                <td>@*</td>
                <td>
                  관리자나 사용자에 의해 등록될 이미지 영역으로 기본코딩을 위한
                  임시이미지
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default RuleName;
