import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Icons } from "../../assets/icons";
import AppbarPofile from "./AppbarPofile";
import ModeCtrl from "./ModeCtrl";

const Appbar = () => {
  return (
    <div
      className="appbar-wrapper ml-[calc(20%+14px)] w-[calc(80%-28px)] py-3 px-6 bg-white dark:bg-gray-950 rounded-sm dark:shadow-[0_0_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0_0.25rem_rgba(165,163,174,0.3)]">
      <div className="appbar-content flex justify-between items-center">
        <div className="appbar-left flex items-center gap-x-3">
          <button className="hidden">
            <MdOutlineMenu size={24}/>
          </button>
          <h3 className="appbar-title text-xl font-semibold">Dashboard</h3>
        </div>
        <div className="appbar-right flex items-center gap-4">
          <div className="appbar-search">
            <form>
              <div className="input-group flex items-center bg-gray-300 dark:bg-gray-700 h-11 min-w-80 py-1 px-3 rounded-xl">
                <span className="input-icon w-5 flex place-content-center">
                  <img src={Icons.SearchBlue} alt="input icon" />
                </span>
                <input type="text" placeholder="Search here ..." className="border-none outline-0 text-[15px] bg-gray-300 dark:bg-gray-700 text-gray-950 dark:text-white px-3 placeholder-gray-800 dark:placeholder-white"/>
              </div>
            </form>
          </div>

          <button className="w-8 h-8 rounded-md relative">
            <img src={Icons.NotificationOrange} alt="notification" className="w-6" />
            <span className="w-2 h-2 rounded-full bg-red-600 absolute top-1 right-2.5"></span>
          </button>
          <AppbarPofile />
          <ModeCtrl />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
