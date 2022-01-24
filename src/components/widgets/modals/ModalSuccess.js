import React from "react";
import { MdUpdate } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ModalSuccess = () => {
  return (
    <>
      <div className="modal d--flex">
        <div className="container">
          <div className="modal__wrapper d--flex">
            <div className="modal__form">
              <form>
                <header className="modal__success d--flex">
                  <div className="modal__wrap d--flex">
                    <MdUpdate />
                    <span className="ml--1">Update</span>
                  </div>
                  <div className="modal__close d--flex">
                    <FaTimes />
                  </div>
                </header>
                <div className="modal__confirmation">
                  <div className="modal__content full--height center--all">
                    <div>
                      <span className="check center--justify mb--1">
                        <BsFillCheckCircleFill />
                      </span>
                      <p>You have succesfully updated the information.</p>
                    </div>
                  </div>
                </div>
                <footer className="modal__foot">
                  <div className="modal__footer d--flex">
                    <button className="okay--btn">Okay</button>
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
export default ModalSuccess;
