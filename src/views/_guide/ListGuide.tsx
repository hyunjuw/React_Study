import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import guideNav, { type navInterface } from "@/views/_guide/guideNav";
import "@assets/css/guide.css";

function ListGuide() {
  const navs = guideNav();
  const location = useLocation().pathname;
  const [activeIndex, setActive] = useState(0); // header nav
  const [subActiveIndex, setSubActive] = useState(0); // aside nav
  const [url, setUrl] = useState<string[]>([]);

  const title: string[] = [];
  const subMenu: navInterface["nav"][] = [];
  const subUrl: string[][] = [];

  navs.map((item) => {
    subMenu.push(item.nav);
    title.push(item.title);
  });
  subMenu.filter((item) => {
    subUrl.push(item.map((sub) => sub.url));
  });

  const chageUrl = (index: number) => {
    subUrl.map((item) => {
      setUrl((old: any) => [...old, item[index]]);
    });
  };

  useEffect(() => {
    subUrl.map((item, i) => {
      item.indexOf(location) > -1 ? setActive(i) : null;
    });
    chageUrl(0);
    console.log(subUrl);
  }, [activeIndex]);

  useEffect(() => {
    subUrl.map((item, i, arr) => {
      if (item.indexOf(location) > -1) {
        arr[i].map((sub) => {
          if (sub.indexOf(location) > -1) {
            const category = url.map((itemUrl) => {
              const slice = itemUrl.split("/");
              return slice[2];
            });
            const locationSlice = location.split("/");
            category.filter((categoryUrl) => {
              if (categoryUrl === locationSlice[2]) {
                url[i] = sub;
              }
            });
          }
        });
        item.map((sub, j) => {
          sub.indexOf(location) > -1 ? setSubActive(j) : null;
        });
      }
    });
  }, [subActiveIndex]);

  const changeIndex = (i: number) => {
    setActive(i);
    setSubActive(0);
  };
  const changeSubIndex = (i: number) => {
    setSubActive(i);
  };
  return (
    <div>
      <div id="page" className="page guide-wrap">
        <header className="guide-header">
          <h1 className="logo">
            <Link to={`/`} title="페이지 이동">
              Name
            </Link>
          </h1>
          <nav>
            <ul className="guide-header-nav">
              {title.map((item, i) => {
                return (
                  <li key={item}>
                    <NavLink
                      to={url[i]}
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
            <h2 className="guide-aside-title">{title[activeIndex]}</h2>
            <nav className="guide-aside-nav">
              <ul>
                {subMenu[activeIndex].map((menu, i) => {
                  return (
                    <li className="menu-item" key={i}>
                      <NavLink
                        to={menu.url}
                        className={({ isActive }) =>
                          isActive ? "is-active" : ""
                        }
                        onClick={() => {
                          changeSubIndex(i);
                        }}
                      >
                        {menu.name}
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
                {subMenu[activeIndex].map((menu, i) => {
                  return menu.url === location ? menu.name : "";
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
