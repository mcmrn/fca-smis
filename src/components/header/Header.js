import React from "react";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "../../img/jhonny.png";

const Header = () => {
  // const { isShow, setIsShow } = show;
  // const handleShow = () => setIsShow(!isShow);

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
                <img alt="img" src={Profile} id="dp" />
              </div>
              <div className="header__logout">
                <FiLogOut />
              </div>
              <div
                id="toggle"
                className="header__sidenav"
                onClick={() => handleShow()}
              >
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
