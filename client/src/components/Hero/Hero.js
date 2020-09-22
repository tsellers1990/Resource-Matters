import React from 'react';
import './Hero.css'

const Hero = ()=>{
  return(
    <div className= "row">
      <div className= "col-lg-6 col-sm-12 hero-title">
        <h2>Justice For All</h2>
        <p>This is a placeholder for the resource matters title.</p>
      </div>
      <div className= "col-lg-6 col-sm-12">
        <img src= "./images/placeholder-600x400.png" className= "hero-image" />
      </div>
    </div>
  )
}

export default Hero;