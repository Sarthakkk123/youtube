import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatched = useDispatch();

  const toggleMenuHandler = () => {
    dispatched(toggleMenu());
  };

  return (
    <div className="header">
      <div
        className="header
      -left"
      >
        <img
          onClick={() => toggleMenuHandler()}
          className="menu-icon"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="youtube-logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="youtube"
        />
      </div>
      <div className="header-center">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-button">Search</button>
      </div>
      <div className="header-right">
        <img
          className="user-icon"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
