import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenav/SideNavigation";
import BannerCreateButton from "../../../widgets/BannerCreateButton";
import ModalCreateRole from "../../../widgets/modals/ModalCreateRole";

const SettingsRole = () => {
  return (
    <>
      <Header />
      <SideNavigation />
      {/* <ModalCreateRole /> */}
      <section className="content">
        <div className="banner">
          <div className="">
            <div className="banner__wrapper d--flex">
              <div className="banner__text">
                <h4>ROLES</h4>
              </div>
              <BannerCreateButton />
            </div>
          </div>
        </div>

        <div className="table">
          <div className="">
            <div className="table__wrapper">
              <div className="table__body">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="">
                      <td>1</td>
                      <td>Admin</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td>1</td>
                      <td>Admin</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td>1</td>
                      <td>Admin</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Director</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Director</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Director</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td>1</td>
                      <td>Admin</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Director</td>
                      <td>Active</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td>1</td>
                      <td>Admin</td>
                      <td>Inactive</td>

                      <td>
                        <div className="dropdown">
                          <button className=" table--btn ">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/classesinfo">View</a>
                            <a href="#">Edit</a>
                            <a href="#">Archive</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingsRole;
