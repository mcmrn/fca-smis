import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import SpinnerButton from "../SpinnerButton";

const ModalCreate = () => {
  return (
    <>
      <div className="modal d--flex">
        <div className="container">
          <div className="modal__wrapper d--flex">
            <div className="modal__form">
              <form>
                <div className="modal__create d--flex">
                  <div className="modal__wrap d--flex">
                    <MdOutlineCreateNewFolder />
                    <span className="ml--1">New Student</span>
                  </div>
                  <div className="modal__close d--flex">
                    <FaTimes />
                  </div>
                </div>
                <div className="modal__body">
                  <div className="modal__content">
                    <label htmlFor="sn">Student No.</label>
                    <input type="text" />
                  </div>
                  <div className="modal__content">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" />
                  </div>
                  <div className="modal__content">
                    <label htmlFor="mname">Middle Name</label>
                    <input type="text" />
                  </div>
                  <div className="modal__content">
                    <label htmlFor="lname">Last name</label>
                    <input type="text" />
                  </div>
                  <div className="modal__content">
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
                </div>
                <footer className="modal__foot">
                  <div className="modal__footer d--flex">
                    <button className="add--btn">
                      Add <SpinnerButton />
                    </button>
                    <button className="cancel--btn">Cancel</button>
                  </div>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalCreate;
