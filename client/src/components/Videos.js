import React from 'react';
import Navbar from './Navbar/Navbar';

const Videos = ()=>{
  return(
    <>
    <Navbar />
    <h4>Videos Section:</h4>
    <br />
    <div className= "row">
      <div className= "col-lg-4">
        <iframe width="300" height="168.75" src="https://www.youtube.com/embed/DoO_IfKLqmk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <div className= "col-lg-4">
        <iframe width="300" height="168.75" src="https://www.youtube.com/embed/rbE53XUtVw0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <div className= "col-lg-4">
      <iframe width="300" height="168.75" src="https://www.youtube.com/embed/zTBmv-Gzf2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>

    </div>
    </>
  )
}

export default Videos;