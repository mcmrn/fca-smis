import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import NoData from "../../../nodata/NoData";
import BannerCreateButton from "../../../widgets/BannerCreateButton";
import SearchBar from "../../../widgets/SearchBar";
import ShowMore from "../../../widgets/ShowMore";

const StudentTable = () => {
  return (
    <>
      <section className="content">
        <div className="banner">
          <div className="">
            <div className="banner__wrapper d--flex">
              <div className="banner__text">
                <h3>STUDENTS</h3>
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
                <table className="table--students">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Enrollment Status</th>
                      <th>Learner Ref. No.</th>
                      <th>Last Name</th>
                      <th>First Name</th>
                      <th>Grade</th>
                      <th>Reg. Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="">
                      <td colSpan="100%">
                        <NoData />
                      </td>
                    </tr>
                    <tr className="red-critical">
                      <td>1</td>
                      <td>Temporary</td>
                      <td></td>
                      <td>Mendoza</td>
                      <td>Dan Josepth</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="red-critical">
                      <td>1</td>
                      <td>Temporary</td>
                      <td></td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="red-critical">
                      <td>1</td>
                      <td>Temporary</td>
                      <td>45854724196954</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Official</td>
                      <td>4585474596954</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Official</td>
                      <td>44326546196954</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Official</td>
                      <td>51245268634554</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="red-critical">
                      <td>1</td>
                      <td>Temporary</td>
                      <td>51245268634554</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>Official</td>
                      <td>51245268634554</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="red-critical">
                      <td>1</td>
                      <td>Temporary</td>
                      <td>51245268634554</td>
                      <td>Ubeda</td>
                      <td>Alexander</td>
                      <td>N/A</td>
                      <td>2021-02-12</td>
                      <td>
                        <div className="dropdown">
                          <button className=" table--btn t--red">
                            <BsFillGearFill />
                            <IoMdArrowDropdown />
                          </button>
                          <div className="dropdown-link">
                            <a href="/students">Edit</a>
                            <a href="#">Delete</a>
                            <a href="#">View Grades</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ShowMore />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentTable;
