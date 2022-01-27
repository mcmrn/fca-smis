import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const BannerCreateButton = () => {
  return (
    <>
      <div className="banner__button">
        <button className="banner--btn d--flex">
          <span className="mr--1">
            <BsFillPlusCircleFill />
          </span>
          Create New
        </button>
      </div>
    </>
  );
};

export default BannerCreateButton;
