import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
      <>
        <div className='wrapper'>
            <div className='inner row'>
                  <h1 className='logo-and-left col align-self-center '>This is the Navbar</h1>
            </div>
        </div>
        <ul className= "nav-btns">
          <li>
            <Link to= "/">
              <h4 className= "nav-btn">Home</h4>
            </Link>
          </li>
          <li>
            <Link to= "/videos">
              <h4 className= "nav-btn">Videos</h4>
            </Link>
          </li>
        </ul>
      </>
    )
}

export default Navbar;