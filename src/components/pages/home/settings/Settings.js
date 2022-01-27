import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import Banner from "../../../banner/Banner";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenav/SideNavigation";

const Settings = () => {
  return (
    <>
      <Header />
      <SideNavigation />

      <section className="content">
        <div className="banner">
          <div className="">
            <div className="banner__wrapper d--flex">
              <div className="banner__text">
                <h4>SETTINGS</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="table">
          <div className="table__card d--grid">
            <div className="table__card__item">
              <span className="t--bold">Class Level</span>
              <p>Manage the Class Level in every School Year</p>
              <a href="/classlevelsettings" className="settings--btn">
                <span className="mr--1">
                  <BsFillGearFill />
                </span>
                Update
              </a>
            </div>

            <div className="table__card__item">
              <span className="t--bold">Teachers</span>
              <p>Manage the Teachers in every School Year</p>
              <a href="/teachersettings" className="settings--btn">
                <span className="mr--1">
                  <BsFillGearFill />
                </span>
                Update
              </a>
            </div>

            <div className="table__card__item">
              <span className="t--bold">Section</span>
              <p>Manage list of Section in every School Year</p>
              <a href="/sectionsettings" className="settings--btn">
                <span className="mr--1">
                  <BsFillGearFill />
                </span>
                Update
              </a>
            </div>

            <div className="table__card__item">
              <span className="t--bold">Room</span>
              <p>Manage list of Room in every School Year</p>
              <a href="/roomsettings" className="settings--btn">
                <span className="mr--1">
                  <BsFillGearFill />
                </span>
                Update
              </a>
            </div>

            <div className="table__card__item">
              <span className="t--bold">Subjects</span>
              <p>Manage list Subjects in every School Year</p>
              <a href="/subjectsettings" className="settings--btn">
                <span className="mr--1">
                  <BsFillGearFill />
                </span>
                Update
              </a>
            </div>

            <div className="table__card__item">
              <span className="t--bold">Role</span>
              <p>Manage list of Role in every School Year</p>
              <a href="/rolesettings" className="settings--btn">
                <span className="mr--1">
                  <BsFillGearFill />
                </span>
                Update
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Settings;
