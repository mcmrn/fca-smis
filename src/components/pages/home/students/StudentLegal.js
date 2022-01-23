import React from "react";
import { AiFillCamera } from "react-icons/ai";
import { MdSave } from "react-icons/md";

const StudentsLegal = () => {
  return (
    <>
      <input type="radio" name="tabs" id="tabthree" />
      <label htmlFor="tabthree" className="menu-label">
        LEGAL VERIFICATION
      </label>
      <div className="tab">
        <div className="students__info">
          <h5>LEGAL VERIFICATION</h5>
        </div>

        <div className="student__form pt--2">
          <form action="">
            <div className="first-form">
              <div className="students__form__content ">
                <p>
                  The school requires that this be a PSA original or "certified
                  true copy" Birth Certificate. If not available, Local Civil
                  Registry Birth Certificate (Original or Certified True Copy or
                  Passport (Photocopied at FCA) will be accepted to temporarily
                  be the source of the student's full legal name and age.
                </p>
                <h5 className="mt--2">
                  The indicated documents have been provided to the school and
                  copies made:
                </h5>
              </div>
              <div className="students__form__content ">
                <div className="students__form__gender d--flex">
                  <input type="checkbox" value="documents" name="documents" />
                  <label htmlFor="documents" className="mr--4">
                    PSA / Philippine Statistics Authority Original Birth
                    Certificate
                  </label>
                </div>
                <div className="students__form__gender ml--2 mt--1 d--flex">
                  <input type="radio" value="bio" name="gender" />
                  <label htmlFor="bio" className="mr--1">
                    Original
                  </label>
                  <input type="radio" value="stepmom" name="gender" />
                  <label htmlFor="stepmom">Photocopy</label>
                </div>
                <div className="students__form__gender mt--1 d--flex">
                  <input type="checkbox" value="documents" name="documents" />
                  <label htmlFor="documents" className="mr--4">
                    LCR / Local Civil Registry Birthcertificate (Temporary
                    Enrollment Only)
                  </label>
                </div>
                <div className="students__form__gender mt--1 d--flex">
                  <input type="checkbox" value="documents" name="documents" />
                  <label htmlFor="documents" className="mr--4">
                    Passport / Photocopy made at FCA (Temporary Enrollment Only)
                  </label>
                </div>
              </div>
              <div className="students__form__content ">
                <h5 className="mt--3">Required School Documents:</h5>
                <div className="students__form__gender mt--1 d--flex">
                  <input type="checkbox" value="documents" name="documents" />
                  <label htmlFor="documents" className="mr--4">
                    Form 138 (Report Card) Original
                  </label>
                </div>
                <div className="students__form__gender mt--1 d--flex">
                  <input type="checkbox" value="documents" name="documents" />
                  <label htmlFor="documents" className="mr--4">
                    Certificate of Good Moral
                  </label>
                </div>
                <div className="students__form__gender mt--1 d--flex">
                  <input type="checkbox" value="documents" name="documents" />
                  <label htmlFor="documents" className="mr--4">
                    Certificate of Clearance (Finamcial and Property
                    Responsibilty)
                  </label>
                </div>
              </div>
              <div className="students__form__content ">
                <label htmlFor="medicala">
                  Other Legal Supporting Documents
                </label>
                <textarea></textarea>
              </div>
              <div className="students__form__content ">
                <label htmlFor="medicala">Google Drive Folder Link</label>
                <textarea></textarea>
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

export default StudentsLegal;
