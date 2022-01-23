import React from "react";
import BannerInfo from "../../../banner/BannerInfo";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenav/SideNavigation";
import StudentsLegal from "./StudentLegal";
import StudentsGuardian from "./StudentsGuardian";
import StudentsInfo from "./StudentsInfo";

const Students = () => {
  return (
    <>
      <Header />
      <SideNavigation />
      <BannerInfo />
      <section className="table">
        <div className="">
          <div className="table__wrapper">
            <div className="table__content">
              <StudentsInfo />
              <StudentsGuardian />
              <StudentsLegal />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
