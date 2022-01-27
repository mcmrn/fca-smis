import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const ModalCreateClass = () => {
  return (
    <>
      <div className="modal d--flex">
        <div className="container">
          <div className="modal__wrapper d--flex">
            <div className="modal__form">
              <form>
                <header className="modal__create d--flex">
                  <div className="modal__wrap d--flex">
                    <MdOutlineCreateNewFolder />
                    <span className="ml--1">New Class</span>
                  </div>
                  <div className="modal__close d--flex">
                    <FaTimes />
                  </div>
                </header>
                <div className="modal__body">
                  <div className="modal__content">
                    <label htmlFor="cl">Class Level</label>
                    <select name="level" id="level">
                      <option value="Grade 1">--</option>
                      <option value="Grade 2">Grade 2</option>
                    </select>
                  </div>
                  <div className="modal__content">
                    <label htmlFor="fname">Section</label>
                    <select name="level" id="level">
                      <option value="Grade 1">--</option>
                      <option value="Grade 2">B</option>
                    </select>
                  </div>
                  <div className="modal__content">
                    <label htmlFor="fname">Teacher</label>
                    <select name="level" id="level">
                      <option value="Grade 1">--</option>
                      <option value="Grade 2">Donna Palomera</option>
                    </select>
                  </div>
                  <div className="modal__content">
                    <label htmlFor="lname">Capacity</label>
                    <input type="text" />
                  </div>
                  <div className="modal__content">
                    <label htmlFor="fname">Room</label>
                    <select name="level" id="level">
                      <option value="Grade 1">--</option>
                      <option value="Grade 2">202</option>
                    </select>
                  </div>
                </div>
                <footer className="modal__foot">
                  <div className="modal__footer d--flex">
                    <button className="add--btn">Create</button>
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
export default ModalCreateClass;
