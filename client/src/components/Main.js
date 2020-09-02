import React from "react";
import '../style.scss';
import Navbar from "./Navbar/Navbar";
import Hero from './Hero';
import WelcomeEmail from './WelcomeEmail';
import About from './About';

const Main = ()=>{
  return (
    <div className="container col-lg-12">
      <Navbar />
      <Hero />
      <WelcomeEmail />
      <About />
    </div>
  );
}

export default Main;