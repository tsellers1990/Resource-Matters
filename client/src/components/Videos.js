import React from 'react';

const Videos = ()=>{
  return(
    <div>
      <h4>Videos Section:</h4>
      <div className= "col-lg-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DoO_IfKLqmk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <div className= "col-lg-4">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rbE53XUtVw0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>
      <div className= "col-lg-4">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/zTBmv-Gzf2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      </div>

    </div>
  )
}

export default Videos;