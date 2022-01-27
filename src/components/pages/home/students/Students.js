import React from "react";
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
      <section className="content">
        <div className="banner">
          <div className="">
            <div className="banner__wrapper d--flex">
              <div className="banner__text">
                <h4>
                  STUDENTS: <span>Alexander Ubeda</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="">
            <div className="table__wrapper">
              <div className="table__content">
                <StudentsInfo />
                <StudentsGuardian />
                <StudentsLegal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Students;
