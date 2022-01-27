import React from "react";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const ModalCreateRoom = () => {
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
                    <span className="ml--1">Add Room Level</span>
                  </div>
                  <div className="modal__close d--flex">
                    <FaTimes />
                  </div>
                </header>
                <div className="modal__confirmation">
                  <div className="modal__content">
                    <label htmlFor="cl">Status</label>
                    <select name="level" id="level">
                      <option value="Grade 1">Active</option>
                      <option value="Grade 2">Grade 2</option>
                    </select>
                  </div>
                  <div className="modal__content">
                    <label htmlFor="lname">Name</label>
                    <input type="text" />
                  </div>
                </div>
                <footer className="modal__foot">
                  <div className="modal__footer d--flex">
                    <button className="add--btn">Add</button>
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
export default ModalCreateRoom;
