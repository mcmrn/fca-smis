import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdSave } from "react-icons/md";
import UserProfile from "../../../../img/profile.png";

const StudentsInfo = () => {
  return (
    <>
      <input type="radio" name="tabs" id="tabone" defaultChecked />
      <label htmlFor="tabone" className="menu-label">
        STUDENTS INFO
      </label>
      <div className="tab">
        <div className="students__info">
          <h5>STUDENT INFORMATION</h5>
        </div>
        <div className="students__img">
          <p>Profile Image</p>
          <img src={UserProfile} alt="img" />
          <p>* Max 60kb Upload</p>

          <div className="upload-button">
            <span>
              <AiFillCamera />
            </span>
            <input
              name="nameDisplayPicture"
              className="file-upload"
              id="displaypicture"
              type="file"
              accept="image/jpg, image/jpeg"
            />
          </div>
        </div>
        <div className="student__form mt--2">
          <form>
            <div className="first-form border-bottom">
              <div className="students__form__content ">
                <label htmlFor="status">Enrollment Status</label>
                <select name="status" id="status" required>
                  <option value="Official">Official</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
              <div className="students__form__content ">
                <label htmlFor="date">Date of Registration</label>
                <input type="date" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="sy">School Year</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="level">Grade Level</label>
                <select name="level" id="level" required>
                  <option value="Official">N/A</option>
                  <option value="Temporary">N/A</option>
                </select>
              </div>
              <div className="students__form__content ">
                <label htmlFor="sname">Select Name</label>
                <select name="sname" id="sname" required>
                  <option value="Official">--</option>
                  <option value="Temporary">--</option>
                </select>
              </div>
              <div className="students__form__content ">
                <label htmlFor="snumber">Student Number</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="lrn">Learner's Referrence Number</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="fname">First Name</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="mname">Midlle Name</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="lname">Last Name</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="gender">Gender</label>

                <div className="students__form__gender d--flex">
                  <input type="radio" value="Male" name="gender" />
                  <label htmlFor="male" className="mr--4">
                    Male
                  </label>
                  <input type="radio" value="Female" name="gender" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="students__form__content ">
                <label htmlFor="date">Date of Birth</label>
                <input className="red-critical" type="date" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="date">Place of Birth</label>
                <input type="text" required />
              </div>
              <div className="students__form__content ">
                <label htmlFor="email">Email Address</label>
                <input type="text" required />
              </div>
              <div className="students__form__content pb--2">
                <label htmlFor="date">Phone</label>
                <input type="number" required />
              </div>
            </div>

            <div className="second-form border-bottom">
              <div className="students__form__content pt--2 ">
                <h5 className="">STUDENT RESIDENCE</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="caddress">Current Address</label>
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
              <div className="students__form__content pb--2">
                <label htmlFor="postal">Postal</label>
                <input type="text" required />
              </div>
            </div>

            <div className="third-form border-bottom">
              <div className="students__form__content pt--2 ">
                <h5>SCHOOL HISTORY</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="laddress">Name of Last School Attended</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content ">
                <label htmlFor="saddredd">School Address</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content  ">
                <label htmlFor="gpa">GPA Last School Year</label>
                <input className="red-critical" type="text" required />
                <span className="t--red">Required</span>
              </div>
              <div className="students__form__content mb--3">
                <label htmlFor="moral">
                  Was the student ever submitted to any form of disciplinary
                  action? If so, why?
                </label>
                <textarea className="red-critical"></textarea>
                <span className="t--red">Required</span>
              </div>
            </div>
            <div className="fourth-form border-bottom">
              <div className="students__form__content pt--2 ">
                <h5>MEDICAL INFORMATION</h5>
                <p className="mb--2 mt--2">
                  Are there any serious medical conditions about whick you wish
                  the school to be aware? Pelase indicate below:
                </p>
              </div>
              <div className="students__form__content ">
                <label htmlFor="medicala">Medical Notes</label>
                <textarea></textarea>
              </div>
              <div className="students__form__content ">
                <label htmlFor="doctor">Pediatrician/Family Doctor</label>
                <input type="text" required />
              </div>
              <div className="students__form__content pb--2">
                <label htmlFor="contact">Contact Number</label>
                <input type="number" required />
              </div>
            </div>
            <div className="fifth-form">
              <div className="students__form__content pt--2 ">
                <h5>FAMILY CIRCUMSTANCES</h5>
              </div>
              <div className="students__form__content ">
                <label htmlFor="medicala">
                  Are there any family circumstances about which you wish the
                  school to be aware?
                </label>
                <textarea className="red-critical"></textarea>
                <span className="t--red">Required</span>
              </div>
            </div>
            <div className="students__form__button d--flex">
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

export default StudentsInfo;
