import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdSave } from "react-icons/md";

const StudentsGuardian = () => {
  return (
    <>
      <input type="radio" name="tabs" id="tabtwo" />
      <label htmlFor="tabtwo" className="menu-label">
        PARENT/GUARDIAN INFO
      </label>
      <div className="tab">
        <div className="students__info">
          <h5>PARENT OR GUARDIAN INFORMATION</h5>
        </div>

        <div className="student__form mt--2">
          <form action="">
            <div className="first-form border-bottom">
              <div className="students__form__content pt--2">
                <h5>FIRST PARENT/GUARDIAN</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="relationship">
                  Relationaship to Student: (please select one)
                </label>

                <div className="students__form__gender d--flex">
                  <input type="radio" value="bio" name="gender" />
                  <label htmlFor="bio" className="mr--4">
                    Biological or Adoptive Mother
                  </label>
                  <input type="radio" value="stepmom" name="gender" />
                  <label htmlFor="stepmom">Step-Mother</label>

                  <input type="radio" value="other" name="gender" />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              <div className="students__form__content ">
                <label htmlFor="title">Title</label>
                <select name="title" id="title" required>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                </select>
              </div>
              <div className="students__form__content ">
                <label htmlFor="maiden">Maiden Surname</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="fname">First Name</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="address">
                  Address(if different from student's):
                </label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="city">City</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="province">Province</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="postal">Postal</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="gender">
                  Does the student reside with this individual?{" "}
                </label>

                <div className="students__form__gender d--flex">
                  <input type="radio" value="yes" name="gender" />
                  <label htmlFor="yes" className="mr--4">
                    Yes
                  </label>
                  <input type="radio" value="no" name="gender" />
                  <label htmlFor="no">No</label>
                </div>
              </div>

              <div className="students__form__content ">
                <label htmlFor="hnumber">Home Phone Number</label>
                <input type="number" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="pnumber">Mobile Phone Number</label>
                <input type="number" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="date">Birth Date</label>
                <input className="red-critical" type="date" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="email">Email(optional)</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="religion">Religion</label>
                <input type="text" required />
              </div>
              <div className="students__form__content pb--3">
                <label htmlFor="occupation">Occupation</label>
                <input type="text" required />
              </div>
            </div>
            <div className="second-form border-bottom">
              <div className="students__form__content pt--2">
                <h5>SECOND PARENT/GUARDIAN</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="relationship">
                  Relationaship to Student: (please select one)
                </label>

                <div className="students__form__gender d--flex">
                  <input type="radio" value="bio" name="gender" />
                  <label htmlFor="bio" className="mr--4">
                    Biological or Adoptive Mother
                  </label>
                  <input type="radio" value="stepmom" name="gender" />
                  <label htmlFor="stepmom">Step-Mother</label>

                  <input type="radio" value="other" name="gender" />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              <div className="students__form__content ">
                <label htmlFor="title">Title</label>
                <select name="title" id="title" required>
                  <option value="mr">Mr.</option>
                  <option value="ms">Ms.</option>
                </select>
              </div>
              <div className="students__form__content ">
                <label htmlFor="maiden">Maiden Surname</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="fname">First Name</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="address">
                  Address(if different from student's):
                </label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="city">City</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="province">Province</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="postal">Postal</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="gender">
                  Does the student reside with this individual?{" "}
                </label>

                <div className="students__form__gender d--flex">
                  <input type="radio" value="yes" name="gender" />
                  <label htmlFor="yes" className="mr--4">
                    Yes
                  </label>
                  <input type="radio" value="no" name="gender" />
                  <label htmlFor="no">No</label>
                </div>
              </div>

              <div className="students__form__content ">
                <label htmlFor="hnumber">Home Phone Number</label>
                <input type="number" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="pnumber">Mobile Phone Number</label>
                <input type="number" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="date">Birth Date</label>
                <input className="red-critical" type="date" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="email">Email(optional)</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="religion">Religion</label>
                <input type="text" required />
              </div>
              <div className="students__form__content pb--2">
                <label htmlFor="occupation">Occupation</label>
                <input type="text" required />
              </div>
            </div>

            <div className="third-form border-bottom pt--2">
              <div className="students__form__content ">
                <h5>EMERGENCY CONTACTS</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="pcontact">Primary Contact Person</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="relation">Relationship</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="htel">Home Tel. No.</label>
                <input type="number" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="onumber">Other Phone</label>
                <input type="number" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="secondary">Secondary Contact Person</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="relation">Relationship</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="htel">Home Tel. No.</label>
                <input type="number" required />
              </div>
              <div className="students__form__content pb--2">
                <label htmlFor="onumber">Other Phone</label>
                <input type="number" required />
              </div>
            </div>

            <div className="fourth-form border-bottom">
              <div className="students__form__content pt--2 ">
                <h5>FINANCIAL INFORMATION</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="fgross">Father's Gross Monthly Income</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="mgross">Mother's Gross Monthly Income</label>
                <input type="text" required />
              </div>
              <div className="students__form__content pb--2">
                <label htmlFor="who">
                  Who will be financing the child's education?
                </label>
                <input type="text" required />
              </div>
            </div>

            <div className="fifth-form">
              <div className="students__form__content pt--2">
                <h5>PAYMENT SCHEME</h5>
              </div>
              <div className="students__form__content ">
                <div className="students__form__gender">
                  <div className="students__form__payment  d--flex">
                    <input type="radio" value="a" name="payment" />
                    <label className="ml--1" htmlFor="a">
                      SCHEME A
                    </label>
                  </div>
                  <div className="students__form__payment  d--flex">
                    <input type="radio" value="b" name="payment" />
                    <label className="ml--1" htmlFor="b">
                      SCHEME B
                    </label>
                  </div>
                  <div className="students__form__payment  d--flex">
                    <input type="radio" value="c" name="payment" />
                    <label className="ml--1" htmlFor="c">
                      SCHEME C
                    </label>
                  </div>
                  <div className="students__form__payment  d--flex">
                    <input type="radio" value="d" name="payment" />
                    <label className="ml--1" htmlFor="d">
                      SCHEME D
                    </label>
                  </div>
                  <div className="students__form__payment  d--flex">
                    <input type="radio" value="other" name="payment" />
                    <label className="ml--1" htmlFor="a">
                      Others(Please specify)
                    </label>
                  </div>
                  <input type="text" name="payment" />
                </div>
              </div>
            </div>

            <div className="students__form__button mb--3 d--flex">
              <button className="banner--btn">
                <span className="mr--1">
                  <MdSave />
                </span>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentsGuardian;
