import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="wrapper">
        <div className="inner">
          <h1 className="header-text">
            Justice For All
          </h1>
          {/* image tag here... We'll create the logo and words all as one to make it easier*/}
        </div>

        <ul className="nav-btns">
          <li className="home-btn">
            <Link to="/">
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link to="/videos">
              <h4 className="video-btn">Videos</h4>
            </Link>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Navbar;
