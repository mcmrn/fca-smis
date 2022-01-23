import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import SearchBar from "../widgets/SearchBar";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="">
          <div className="banner__wrapper d--flex">
            <div className="banner__text">
              <h3>STUDENTS</h3>
            </div>
            <SearchBar />
            <div className="banner__button">
              <button className="banner--btn d--flex">
                <span className="mr--1">
                  <BsFillPlusCircleFill />
                </span>
                Create New
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
