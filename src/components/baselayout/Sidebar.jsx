import React, { useState } from "react";
import { Icons } from "../../assets/icons";
import { MdOutlineClose } from "react-icons/md";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { MENU_LISTS, routes } from "../arrayLists/menuList";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  }
  return (
    <div className="sidebar-wrapper dark:bg-gray-950 bg-white py-5 px-4 dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] h-full flex flex-col rounded-sm z-[999] fixed left-0">
      <div className="sidebar-top mb-[32px] flex items-center justify-between">
        <div className="sidebar-brand flex items-center justify-center gap-x-[12px]">
          <span className="brand-logo bg-blue-700 rounded-sm w-8 h-8 flex place-content-center">
            <img src={Icons.LogoWhite} alt="logo" className="w-5" />
          </span>
          <span className="brand-text">Marshall</span>
        </div>
        <button className="sidebar-close text-black p-[0.125rem] rounded-sm bg-white cursor-pointer hover:bg-gray-300">
          <MdOutlineClose />
        </button>
      </div>

      <div className="sidebar-body flex w-full mt-[8rem]">
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>

          <div className="sidebar-menu w-full">
            <ul className="menu-lists flex flex-col gap-y-1.5">
              {MENU_LISTS.map((menu, index) => (
                <li key={index}>
                  <Link
                    to={routes[index].path}
                    className={`h-[44px] flex items-center gap-x-[14px] py-0.5 px-5 font-medium ${
                      index === currentTab
                        ? "bg-blue-700 dark:text-white text-gray-950 rounded-sm"
                        : ""
                    }`} onClick={() => selectMenuHandler(index)}
                  >
                    

                    <span
                      className={`menu-link-icon w-5 ${
                        index === currentTab ? "invert-[1] brightness-[100%]" : ""
                      }`}
                    >
                      <img src={menu.icon} alt={menu.alt} />
                    </span>
                    <span
                      className={`menu-link-text ${
                        index === currentTab ? "text-white dark:text-white" : ""
                      }`}
                    >
                      {menu.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Sidebar;
