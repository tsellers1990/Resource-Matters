import React from "react";
import '../style.scss';
import Navbar from "./Navbar/Navbar";
import Hero from './Hero';
import WelcomeEmail from './WelcomeEmail';
import About from './About';
import Footer from './Footer';

const Main = ()=>{
  return (
    <div className="container col-lg-12">
      <Navbar />
      <Hero />
      <WelcomeEmail />
      <About />
      <Footer />
    </div>
  );
}

export default Main;