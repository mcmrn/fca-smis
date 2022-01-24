import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BiNotepad } from "react-icons/bi";
import { BiUserPin } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiUserSettingsFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import Logo from "../../img/logo-white.png";

const SideNavigation = () => {
  return (
    <>
      <section className="sidenav">
        <div className="sidenav__wrapper">
          <div className="sidenav__menu">
            <nav>
              <ul>
                <header className="sidenav__logo">
                  <img alt="img" src={Logo} />
                </header>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <AiFillDashboard />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Dashborad</a>
                    </div>
                  </div>
                </li>
                <li className="active">
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="/">
                        <FaUserAlt />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="/">Students</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <HiUserGroup />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Classes</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <BiNotepad />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Subjects</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <BiUserPin />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Grades</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <HiOutlineSpeakerphone />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Anouncements</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <RiUserSettingsFill />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Users</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="sidenav__menu__list d--flex">
                    <div className="sidenav__icon">
                      <a href="#">
                        <AiFillSetting />
                      </a>
                    </div>
                    <div className="sidenav__button">
                      <a href="#">Settings</a>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};
export default SideNavigation;
