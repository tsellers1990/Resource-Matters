import React from "react";
import '../style.scss';
import Navbar from "./Navbar/Navbar";
import Hero from './Hero/Hero';
import WelcomeEmail from './WelcomeEmail';
import About from './About';
import Videos from './Videos';
import Footer from './Footer';

const Main = ()=>{
  return (
    <div className="container col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <Navbar />
      <Hero />
      <WelcomeEmail />
      <About />
      <Footer />
    </div>
  );
}

export default Main;