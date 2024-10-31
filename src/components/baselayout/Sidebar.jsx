import React from "react";
import { Icons } from "../../assets/icons";
import { MdOutlineClose } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper dark:bg-gray-950 bg-white py-5 px-4 dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] h-full flex flex-col rounded-sm z-[999] fixed left-0">
      <div className="sidebar-top mb-[32px] flex items-center justify-between">
        <div className="sidebar-brand flex items-center justify-center gap-x-[12px]">
          <span className="brand-logo bg-blue-700 rounded-sm w-8 h-8 flex place-content-center">
            <img src={Icons.LogoWhite} alt="logo" className="w-5" />
          </span>
          <span className="brand-text">Chloe</span>
        </div>
        <button className="sidebar-close text-black p-[0.125rem] rounded-sm bg-white cursor-pointer hover:bg-gray-300">
          <MdOutlineClose />
        </button>
      </div>
      <div className="sidebar-body"></div>
    </div>
  );
};

export default Sidebar;
