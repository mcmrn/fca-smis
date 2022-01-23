import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <div className="banner__search">
        <form className="search d--flex">
          <label htmlFor="search"></label>
          <input type="text" placeholder="Search" />
          <button>
            <BsSearch />
          </button>
        </form>
      </div>
    </>
  );
};
export default SearchBar;
