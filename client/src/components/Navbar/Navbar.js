import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className='inner row'>
                  <h1 className='logo-and-left col align-self-center '>This is the Navbar</h1>
            </div>
            <div className= "row">
              <Link to= "/">
                <h2 className= "col align-self-center nav-btn">Home</h2>
              </Link>
              <Link to= "/videos">
                <h2 className= "col align-self-end nav-btn">Videos</h2>
              </Link>
            </div>
        </div>
    )
}

export default Navbar;