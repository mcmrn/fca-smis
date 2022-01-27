import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";

const ModalDeleteStudent = () => {
  return (
    <>
      <div className="modal d--flex">
        <div className="container">
          <div className="modal__wrapper d--flex">
            <div className="modal__form">
              <form>
                <header className="modal__delete d--flex">
                  <div className="modal__wrap d--flex">
                    <AiFillDelete />
                    <span className="ml--1">Confirmation</span>
                  </div>
                  <div className="modal__close d--flex">
                    <FaTimes />
                  </div>
                </header>
                <div className="modal__confirmation">
                  <div className="modal__content full--height center--all">
                    <div>
                      <span className="exclamation center--justify mb--1">
                        <BsExclamationCircleFill />
                      </span>
                      <p>Are you sure you want to delete this student?</p>
                    </div>
                  </div>
                </div>
                <footer className="modal__foot">
                  <div className="modal__footer d--flex">
                    <button className="delete--btn">Okay</button>
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
export default ModalDeleteStudent;
