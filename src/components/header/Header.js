import React from "react";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="">
          <div className="header__wrapper d--flex">
            <div className="header__schoolyear">
              <p>
                School Year: <span className="t--bold">2022-2023</span>
              </p>
            </div>
            <div className="header__branding d--none">
              <h4>FCA SMIS</h4>
            </div>
            <div className="header__profile d--flex">
              <div className="header__profile__details t--right">
                <h4>Jhonny Dichoso</h4>
                <span>Admin</span>
              </div>
              <div className="header__profile__image d--flex">
                <img alt="img" src="../img/jhonny.png" id="dp" />
              </div>
              <div className="header__logout">
                <FiLogOut />
              </div>
              <div className="header__sidenav">
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;