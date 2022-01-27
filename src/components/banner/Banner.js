import React from "react";
import BannerCreateButton from "../widgets/BannerCreateButton";
import SearchBar from "../widgets/SearchBar";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="">
          <div className="banner__wrapper d--flex">
            <div className="banner__text">
              <h3>STUDENTS</h3>
            </div>
            <SearchBar />
            <BannerCreateButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
