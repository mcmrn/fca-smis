import React from "react";
import Header from "../../../header/Header";
import SideNavigation from "../../../sidenav/SideNavigation";

const ClassesInfo = () => {
  return (
    <>
      <Header />
      <SideNavigation />

      <section className="content">
        <div className="banner">
          <div className="">
            <div className="banner__wrapper d--flex">
              <div className="banner__text">
                <h4>GRADE 1 A</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="table">
          <div className="">
            <div className="table__wrapper">
              <div className="table__body">
                <table className="table--grade">
                  <thead>
                    <tr>
                      <th className="id">#</th>
                      <th>Learner Ref. No.</th>
                      <th>Student No.</th>
                      <th>Last Name</th>
                      <th>First Name</th>
                      <th>Middle Name</th>
                      <th>Gender</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="">
                      <td>1</td>
                      <td>5425896525</td>
                      <td>FCA-2020-21</td>
                      <td>Laluon</td>
                      <td>Dan Josepth</td>
                      <td>N/A</td>
                      <td>Male</td>
                    </tr>

                    <tr className="">
                      <td>1</td>
                      <td>5425896525</td>
                      <td>FCA-2020-21</td>
                      <td>Vasquez</td>
                      <td>John Chriostian</td>
                      <td>N/A</td>
                      <td>Gender</td>
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

export default ClassesInfo;
