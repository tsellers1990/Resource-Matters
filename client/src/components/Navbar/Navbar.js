import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../../Images/Logo.PNG'

export const Navbar = () => {
  return (
    <>
      <div className="wrapper">

        <div className="inner">
          <div className="logo">
            <img src={Logo} />
          </div>

          <ul className="nav-btns">
            <li className="home-btn">
              <Link to="/">
                <h4>Home</h4>
              </Link>
            </li>
            <li classNamme="video-btn">
              <Link to="/videos">
                <h4>Videos</h4>
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Navbar;
