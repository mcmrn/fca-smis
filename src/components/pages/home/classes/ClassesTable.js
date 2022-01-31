import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import NoData from "../../../nodata/NoData";
import BannerCreateButton from "../../../widgets/BannerCreateButton";
import SearchBar from "../../../widgets/SearchBar";

const ClassesTable = () => {
  return (
    <>
      <section className="content">
        <div className="banner">
          <div className="">
            <div className="banner__wrapper d--flex">
              <div className="banner__text">
                <h3>CLASSES</h3>
              </div>
              <SearchBar />
              <BannerCreateButton />
            </div>
          </div>
        </div>
        <div className="table">
          <div className="">
            <div className="table__wrapper">
              <div className="table__body">
                <table className="table--class">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Class Level</th>
                      <th>Section</th>
                      <th>Teacher Incharge</th>
                      <th>Capacity</th>
                      <th>Room</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* <tr className="">
                      <td>1</td>
                      <td>Grade 1</td>
                      <td>A</td>
                      <td>20</td>
                      <td>Dan Josepth</td>
                      <td>N/A</td>
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
                      <td>Grade 1</td>
                      <td>A</td>
                      <td>20</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 1</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 2</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 2</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 2</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 1</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 2</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                      <td>Grade 1</td>
                      <td>A</td>
                      <td>Ubeda</td>
                      <td>20</td>
                      <td>N/A</td>
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
                    </tr> */}

                    <tr className="">
                      <td colSpan="100%">
                        <NoData />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="end center--justify pt--2">
                <span>End of records.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClassesTable;
