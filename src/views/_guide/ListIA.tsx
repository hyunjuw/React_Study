import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@components/uu-components/Tabs";
import Tab from "@components/uu-components/Tab";
import listTable, { type listTableType } from "./ListTable";
import "@assets/scss/guide.scss";

interface pageDataType {
  total: number;
  complete: number;
  delete: number;
  deploy: number;
  per: string;
}
interface totalDataType {
  total: number;
  done: number;
  delete: number;
  deploy: number;
  per: number | string;
}

const tabName: string[] = ["메뉴명1", "메뉴명2", "메뉴명3"];
const table = {
  header: [
    "번호",
    "Depth01",
    "Depth02",
    "Depth03",
    "Depth04",
    "Depth05",
    "Depth06",
    "종류",
    "화면ID",
    "시작일",
    "완료일",
    "수정일",
    "완료예정일",
    "상태",
    "담당자",
    "비고",
  ] as string[],
  mobileHeader: ["종류", "Depth", "화면ID"] as string[],
};

const pageData: pageDataType[] = [];
const totalArray: listTableType[] = [];
const totalData: totalDataType = {
  total: 0,
  done: 0,
  delete: 0,
  deploy: 0,
  per: 0,
};

listTable.map((tab, i, array) => {
  const status = {
    ing: 0,
    done: 0,
    delete: 0,
    deploy: 0,
  };
  tab.map((item) => {
    item.status.indexOf("ing") === 0 ? status.ing++ : 0;
    item.status.indexOf("done") === 0 ? status.done++ : 0;
    item.status.indexOf("deploy") === 0 ? status.deploy++ : 0;
    item.status.indexOf("delete") === 0 ? status.delete++ : 0;
  });
  pageData.push({
    total: tab.length,
    complete: status.done,
    delete: status.delete,
    deploy: status.deploy,
    per: (
      ((status.done + status.deploy) / (tab.length - status.delete)) *
      100
    ).toFixed(2),
  });
  totalArray.push(...array[i]);
  totalData.total = totalArray.length;
});
totalArray.map((item) => {
  item.status.indexOf("done") === 0 ? totalData.done++ : 0;
  item.status.indexOf("deploy") === 0 ? totalData.deploy++ : 0;
  item.status.indexOf("delete") === 0 ? totalData.delete++ : 0;
});
totalData.per = (
  ((totalData.done + totalData.deploy) /
    (totalArray.length - totalData.delete)) *
  100
).toFixed(2);

function ListIA() {
  return (
    <div className="page guide-wrap">
      {/* header */}
      <header className="guide-header">
        <h1 className="logo">
          <Link to={`/`} title="현황판 페이지 이동">
            Name
          </Link>
        </h1>
        <nav>
          <ul className="guide-header-nav is-ia">
            <li>
              <Link
                to={`/guide/convention/ruleIntro`}
                className="btn btn-guide"
                title="퍼블리싱 가이드 페이지 이동"
              >
                GUIDE
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* main */}
      <main className="container guide-container">
        <div className="content content-side">
          <h2 className="sr-only">현황판 IA</h2>
          <div className="guide-write">
            <h3 className="title">작성 가이드</h3>
            <ul className="guide-write-list">
              <li>
                종류 표시방법 - [M] Main / [S] Sub Page / [P] Full Popup / [B]
                Bottom Sheet / [T] Toast
              </li>
              <li>
                진척관리 - [시작일] 최초 작업 시작일 / [완료일] 최초 작업 완료일
                / [수정일] 마지막 수정일 / [완료예정일] 최초 작업 완료 예정일 /
                [상태]
                <span className="ing">진행중</span> |{" "}
                <span className="done">완료</span> |{" "}
                <span className="deploy">배포</span> |{" "}
                <span className="delete">삭제</span>
              </li>
              <li>
                결함관리 - 추가/수정/삭제 이슈가 있는 경우 소스 코드와
                [비고]란에 동일한 주석 문구를 표시해주세요. (ex. 주석 표기
                YYMMDD 작업내용 수정)
              </li>
            </ul>
          </div>
          <div className="guide-ia">
            <h3 className="sr-only">현황판 IA 리스트</h3>
            <Tabs
              add={
                <div className="work-status ia-total">
                  <span>
                    전체: <em className="count-total">{totalData.total}</em>
                  </span>
                  <span>
                    완료:{" "}
                    <em className="count-done">
                      {totalData.done + totalData.deploy}
                    </em>
                  </span>
                  <span>
                    진척률: <em className="count-percent">{totalData.per}%</em>
                  </span>
                </div>
              }
            >
              {listTable.map((tab, index) => {
                return (
                  <Tab title={tabName[index]} key={index}>
                    {/* ia table */}
                    <div className="work-status ia-page">
                      <span>
                        전체: <em>{pageData[index].total}</em>
                      </span>
                      <span>
                        완료: <em>{pageData[index].complete}</em>
                      </span>
                      <span>
                        삭제: <em>{pageData[index].delete}</em>
                      </span>
                      <span>
                        배포: <em>{pageData[index].deploy}</em>
                      </span>
                      <span>
                        진척률: <em>{pageData[index].per}%</em>
                      </span>
                    </div>
                    <table className="guide-ia-table">
                      <caption className="sr-only">
                        {tabName[index]} 현황판 IA List
                      </caption>
                      <thead>
                        <tr>
                          {table.header.map((item, i) => {
                            return <th key={i}>{item}</th>;
                          })}
                        </tr>
                      </thead>
                      <thead className="is-mobile">
                        <tr>
                          {table.mobileHeader.map((item, i) => {
                            return <th key={i}>{item}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {tab.map((item, i) => {
                          return (
                            <tr key={`table` + i} className={item.status}>
                              <td>{i + 1}</td>
                              <td>{item.depth1}</td>
                              <td>{item.depth2}</td>
                              <td>{item.depth3}</td>
                              <td>{item.depth4}</td>
                              <td>{item.depth5}</td>
                              <td>{item.depth6}</td>
                              <td>{item.type}</td>
                              <td>
                                <Link
                                  to={item.url}
                                  title="페이지 새창 열림"
                                  target="_blank"
                                >
                                  {item.page}
                                </Link>
                              </td>
                              <td>{item.startDate}</td>
                              <td>{item.endDate}</td>
                              <td>{item.finalDate}</td>
                              <td>{item.dueDate}</td>
                              <td>
                                {item.status === "ing" && "진행중"}
                                {item.status === "done" && "완료"}
                                {item.status === "deploy" && "배포"}
                                {item.status === "delete" && "삭제"}
                              </td>
                              <td>{item.worker}</td>
                              <td>
                                {item.memos.map((memo, j) => {
                                  return <div key={`memo` + j}>{memo}</div>;
                                })}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    {/* // ia table */}
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}
export default ListIA;
