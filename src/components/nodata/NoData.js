import React from "react";
import { AiFillFolder } from "react-icons/ai";
import Header from "../header/Header";
import SideNavigation from "../sidenav/SideNavigation";

const NoData = () => {
  return (
    <>
      <div className="table__nodata d--flex">
        <span>
          <AiFillFolder />
        </span>
        <p className="t--bold">No Data</p>
      </div>
    </>
  );
};

export default NoData;
