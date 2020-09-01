import React from "react";
import "./Navbar.css";
import PlaceHolder from'../../Images/placeholder.png'

export const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="inner">
        <div className="left">
            <img src={PlaceHolder} className="logo"/>
            {/*^^^ make a png of the logo with the text so that we dont have to worry about positioning text too */}
          {/* <p>This is the Left, logo and stuff here</p> */}
        </div>
        <div className="center">
          <p>This is the Center</p>
        </div>
        <div className="right">
          <p>This is the Right</p>
        </div>
      </div>
    </div>
  );
};
