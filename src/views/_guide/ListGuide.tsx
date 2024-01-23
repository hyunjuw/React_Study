import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import guideNav, { type navInterface } from "@/views/_guide/guideNav";
import "@assets/scss/guide.scss";

type Nav = {
  name: string;
  url: string;
};

function ListGuide() {
  const navs = guideNav() as navInterface[];
  const [gnb, setGnb] = useState<string[]>([]);
  const [lnb, setLnb] = useState<Nav[][]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0); // header nav
  const [subActiveIndex, setSubActiveIndex] = useState<number>(0); // aside nav
  const location = useLocation().pathname;
  const [gnbUrl, setGnbUrl] = useState<string[]>([]);
  const [lnbUrl, setLnbUrl] = useState<string[][]>([]);

  useEffect(() => {
    navs.map((item) => {
      setGnb((gnb) => [...gnb, item.title]); // title
      setLnb((lnb) => [...lnb, [...item.nav]]); // subMenu
    });
  }, []);

  useEffect(() => {
    lnb.map((item) => {
      setGnbUrl((gnbUrl) => [...gnbUrl, item[0].url]);
      setLnbUrl((lnbUrl) => [...lnbUrl, item.map((sub) => sub.url)]); // subUrl
    });
  }, [lnb]);

  useEffect(() => {
    const category = location.split("/")[2];
    gnbUrl.map((item, i, arr) => {
      if (item.split("/")[2] === category) {
        setActiveIndex(i);
        arr[i] = location;
      }
    });
    lnbUrl.map((item) => {
      if (item.indexOf(location) > -1) {
        item.map((sub, j) => {
          sub.indexOf(location) > -1 ? setSubActiveIndex(j) : null;
        });
      }
    });
  }, [navs]);

  const changeUrl = (index: number) => {
    const locationCategory = location.split("/")[2];
    const gnbCategory = gnbUrl[activeIndex].split("/")[2];
    lnbUrl.map((item) => {
      if (item.indexOf(location) > -1) {
        locationCategory === gnbCategory
          ? (gnbUrl[activeIndex] = item[index])
          : null;
      }
    });
  };
  const changeIndex = (i: number) => {
    setActiveIndex(i);
    setSubActiveIndex(0);
  };
  const changeSubIndex = (i: number) => {
    setSubActiveIndex(i);
    changeUrl(i);
  };
  return (
    <div>
      <div id="page" className="page guide-wrap">
        <header className="guide-header">
          <h1 className="logo">
            <Link to={`/`} title="페이지 이동">
              Openobject
            </Link>
          </h1>
          <nav>
            <ul className="guide-header-nav">
              {gnb.map((item, i) => {
                return (
                  <li key={item}>
                    <NavLink
                      to={gnbUrl[i]}
                      className={({ isActive }) =>
                        isActive ? "btn btn-text is-active" : "btn btn-text"
                      }
                      onClick={() => {
                        changeIndex(i);
                      }}
                    >
                      {item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <Link
              to={`/`}
              className="btn btn-guide"
              title="현황판 페이지로 이동"
            >
              IA
            </Link>
            <button
              type="button"
              className="btn btn-mobile"
              aria-label="메뉴"
            ></button>
          </nav>
        </header>
        <main className="container guide-container">
          <aside className="guide-aside">
            <h2 className="guide-aside-title">{gnb[activeIndex]}</h2>
            <nav className="guide-aside-nav">
              <ul>
                {lnb[activeIndex]?.map((sub, i) => {
                  return (
                    <li className="menu-item" key={i}>
                      <NavLink
                        to={sub.url}
                        className={({ isActive }) =>
                          isActive ? "is-active" : ""
                        }
                        onClick={() => {
                          changeSubIndex(i);
                        }}
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>
          <div className="content guide-page">
            <div className="content-header">
              <h2 className="content-title">
                {lnb[activeIndex]?.map((sub) => {
                  return sub.url === location ? sub.name : "";
                })}
              </h2>
            </div>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
export default ListGuide;
