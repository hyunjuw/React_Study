import React from "react";
import { Link } from "react-router-dom";
import PrismCode from "@guide/components/PrismCode";
import "@assets/scss/guide.scss";

function RuleStandard() {
  return (
    <div className="content-body">
      <section className="section">
        <h3 className="section-title">HTML 기본문서</h3>
        <ul className="list-dot">
          <li>들여쓰기 공백(tabSize)은 2를 사용합니다.</li>
          <li>속성(attr)값에는 항상 큰 따옴표를 사용합니다.</li>
          <li>
            단일 태그에는 슬래시(/)를 사용하지 않습니다. (예: <br /> or <img />)
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <!DOCTYPE html>
            <html lang="ko"></html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Page Title | Category</title>
            </head>
            <body>
            </body>
            </html>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">DOCTYPE HTML5선언</h4>
        <ul className="list-dot">
          <li>
            HTML5로 선언한다. DTD 선언시 앞에 공백이 오지 않도록 해야하며, 문서
            최상단에 선언 한다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <!DOCTYPE html>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">언어 정의</h4>
        <ul className="list-dot">
          <li>
            lang=&quot;ko&quot;를 기본으로 표기하며 언어에 따라서 해당국가
            언어로 표기한다.
          </li>
          <li>
            <a
              href="https://www.w3schools.com/tags/ref_language_codes.asp"
              target="_blank"
              title="새창열림"
              rel="noreferrer"
            >
              ISO Language Codes
            </a>
            (참고)
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <html lang="ko"> /* Korean 한국 */
            <html lang="en"> /* English 영어 */
            <html lang="ja"> /* Japanese 일본 */
            <html lang="zh"> /* Chinese 중국 */
            <html lang="ru"> /* Russian 러시아 */
            <html lang="de"> /* German 독일 */
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">인코딩 정의</h4>
        <ul className="list-dot">
          <li>
            charset=&quot;utf-8&quot;를 기본값으로 사용하고, head 태그의 첫
            번째에 선언한다.
          </li>
        </ul>
        <PrismCode
          html
          code={`
            <meta charset="utf-8" />
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">뷰포트 정의</h4>
        <PrismCode
          html
          code={`
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">문서제목 표기법</h4>
        <ul className="list-dot">
          <li>페이지별 제목이 구분 되어야 한다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <title>Page Title | Category<title>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">표준 문법의 사용</h4>
        <ul className="list-dot">
          <li>
            HTML은 해당 DTD의 명세에 맞게 작성하며, W3C validation을 통과해야
            한다.
          </li>
          <li>DTD를 제외한 모든 엘리먼트와 애트리뷰트는 소문자로 작성한다.</li>
          <li>애트리뷰트의 값은 큰따움표(&quot;&quot;)로 묶는다.</li>
          <li>
            특수기호는 Entity name을 사용하여 entity 코드로 변환한다. Entity
            코드는 ISO-8859-1을 기준으로 한다.
          </li>
          <li>마크업은 W3C html5문법에 준하여 사용한다.</li>
          <li>종료 태그는 생략하지 않는다.</li>
        </ul>
        <PrismCode
          html
          code={`
            <title>Page Title | Category<title>
          `}
        ></PrismCode>
      </section>
      <section className="section">
        <h4 className="section-subtitle">특수기호 Entity name</h4>
        <div className="table-wrap">
          <table className="guide-table v-table">
            <caption>자주 사용되며 주의 해야할 특수기호</caption>
            <tbody>
              <tr>
                <th scope="row">Character</th>
                <td>&#8361;</td>
                <td>&quot;</td>
                <td>&amp;</td>
                <td>&lt;</td>
                <td>&gt;</td>
                <td>&nbsp;</td>
                <td>&middot;</td>
              </tr>
              <tr>
                <th scope="row">Entity Name</th>
                <td>&amp;#8361;</td>
                <td>&amp;quot;</td>
                <td>&amp;amp;</td>
                <td>&amp;lt;</td>
                <td>&amp;gt;</td>
                <td>&amp;nbsp;</td>
                <td>&amp;middot;</td>
              </tr>
            </tbody>
          </table>
          <div className="tip">
            * 참고:{" "}
            <Link
              to="http://www.w3schools.com/html/html_entities.asp"
              target="_blank"
              title="새창"
            >
              HTML Entities
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <h4 className="section-subtitle">시맨틱 마크업</h4>
        <table className="guide-table v-table h-table">
          <caption>시맨틱 마크업</caption>
          <colgroup>
            <col style={{ width: 20 + `%` }} />
            <col style={{ width: 20 + `%` }} />
            <col style={{ width: 20 + `%` }} />
            <col style={{ width: 20 + `%` }} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">종류</th>
              <th scope="col">구분</th>
              <th scope="col">태그</th>
              <th scope="col">설명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" rowSpan={2}>
                그룹
              </th>
              <td>블록타입</td>
              <td>div</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">인라인타입</td>
              <td>span</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" rowSpan={6}>
                목차
              </th>
              <td>목차 1레벨</td>
              <td>h1</td>
              <td>페이지 제목 최상위 레벨(문서 필수 요소)</td>
            </tr>
            <tr>
              <td className="td-line">목차 2레벨</td>
              <td>h2</td>
              <td>페이지 제목 수준</td>
            </tr>
            <tr>
              <td className="td-line">목차 3레벨</td>
              <td>h3</td>
              <td>컨텐츠 핵심 제목 수준</td>
            </tr>
            <tr>
              <td className="td-line">목차 4레벨</td>
              <td>h4</td>
              <td>컨텐츠 부 제목 수준</td>
            </tr>
            <tr>
              <td className="td-line">목차 5레벨</td>
              <td>h5</td>
              <td>컨텐츠 상세 제목 수준</td>
            </tr>
            <tr>
              <td className="td-line">목차 6레벨</td>
              <td>h6</td>
              <td>컨텐츠 상세 제목 수준</td>
            </tr>
            <tr>
              <th scope="row" rowSpan={7}>
                내용
                <br />
                (Block Type)
              </th>
              <td>순서 없는 리스트</td>
              <td>ul, li</td>
              <td>
                도형, 도트 블릿 리스트 또는 반복적인 컨텐츠 그룹에 사용한다.
              </td>
            </tr>
            <tr>
              <td className="td-line">순서 있는 리스트</td>
              <td>ol, li</td>
              <td>
                순차적인 블릿 리스트 또는 순서가 중요한 컨텐츠 그룹에 사용한다.
              </td>
            </tr>
            <tr>
              <td className="td-line">정의 리스트</td>
              <td>dl, dt, dd</td>
              <td>
                목차를 대신하여 사용하지 않으며 dt, dd를 모두 갖추어야 한다.
              </td>
            </tr>
            <tr>
              <td className="td-line">단락</td>
              <td>p</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">주소</td>
              <td>address</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">사진의 내용 표시</td>
              <td>figure</td>
              <td>호환성 IE9+</td>
            </tr>
            <tr>
              <td className="td-line">사진의 제목 표시</td>
              <td>figcaption</td>
              <td>호환성 IE9+</td>
            </tr>
            <tr>
              <th scope="row" rowSpan={6}>
                내용
                <br />
                (Inline Type)
              </th>
              <td>링크</td>
              <td>a</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">중요한</td>
              <td>strong</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">일반강조</td>
              <td>em</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">의미없는 마크업</td>
              <td>i</td>
              <td>실제 용도에 의미를 두지는 않으며 아이콘 등에 사용한다.</td>
            </tr>
            <tr>
              <td className="td-line">정의</td>
              <td>dfn</td>
              <td>title속성을 사용하여 용어를 정의한다.</td>
            </tr>
            <tr>
              <td className="td-line">작은 텍스트</td>
              <td>small</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row" rowSpan={5}>
                서식
              </th>
              <td>서식 그룹</td>
              <td>fieldset</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">서식 제목</td>
              <td>legend</td>
              <td>서식 그룹의 제목</td>
            </tr>
            <tr>
              <td className="td-line">라벨</td>
              <td>label</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">입력, 선택 컨트롤</td>
              <td>input, textarea, select</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">버튼</td>
              <td>button</td>
              <td>일반 버튼타입과 전송타입의 버튼 있다.</td>
            </tr>
            <tr>
              <th scope="row" rowSpan={10}>
                표
              </th>
              <td>표</td>
              <td>table</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 제목</td>
              <td>caption</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 열 그룹</td>
              <td>colgroup</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 열</td>
              <td>col</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 헤더</td>
              <td>thead</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 본문</td>
              <td>tbody</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 푸터</td>
              <td>tfoot</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 행</td>
              <td>tr</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 제목셀</td>
              <td>th</td>
              <td></td>
            </tr>
            <tr>
              <td className="td-line">표 내용셀</td>
              <td>td</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default RuleStandard;
