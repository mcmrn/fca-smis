import React from "react";
import { BsFillGearFill, BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import NoData from "../../../nodata/NoData";
import BannerCreateButton from "../../../widgets/BannerCreateButton";
import SearchBar from "../../../widgets/SearchBar";
import ShowMore from "../../../widgets/ShowMore";
import { studentData } from "../../../data/StudentData.js";
import ModalCreateStudent from "../../../widgets/modals/ModalCreateStudent.js";
const StudentTable = () => {
  const [isAdd, setIsAdd] = React.useState(false);

  const handleAdd = () => setIsAdd(true);
  let count = 0;

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

              <div className="banner__button">
                <button className="banner--btn d--flex" onClick={handleAdd}>
                  <span className="mr--1">
                    <BsFillPlusCircleFill />
                  </span>
                  Create New
                </button>
              </div>
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
                    {studentData.length > 0 ? (
                      studentData.map((item, key) => {
                        count += 1;
                        return (
                          <tr className="red-critical" key={key}>
                            <td>{count}</td>
                            <td>{item.enrollment_status}</td>
                            <td>{item.lrn}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.grade}</td>
                            <td>{item.regdate}</td>
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
                        );
                      })
                    ) : (
                      <tr className="">
                        <td colSpan="100%">
                          <NoData />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <ShowMore />
            </div>
          </div>
        </div>
      </section>

      {isAdd && <ModalCreateStudent />}
    </>
  );
};

export default StudentTable;
