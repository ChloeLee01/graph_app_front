import React from "react";
import Sales from "./Sales";
import Visitors from "./Visitors";
import TotalRevenue from "./TotalRevenue";

const DashboardScreen = () => {
  return (
    <div className="contents-area ml-[calc(20%+14px)] w-[calc(80%-28px)] mt-[14px]">
      <div className="area-row are-one mt-[14px] grid grid-cols-[4fr_3fr] gap-x-[14px]">
        <Sales />
        <Visitors />
      </div>
      <div className="area-row ar-two grid grid-cols-[3fr_2fr_2fr]">
        <TotalRevenue />
      </div>
    </div>
  );
};

export default DashboardScreen;
