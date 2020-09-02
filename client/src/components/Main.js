import React from "react";
import '../style.scss';
import Navbar from "./Navbar/Navbar";
import Hero from './Hero';

const Main = ()=>{
  return (
    <div className="container col-lg-12">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Main;