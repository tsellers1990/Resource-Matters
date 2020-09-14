import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className='inner row'>
                  <h1 className='logo-and-left col align-self-center '>This is the Navbar</h1>
            </div>
            <div className= "row nav-btns">
                <Link to= "/">
                  <h2>Home</h2>
                </Link>
                <Link to= "/videos">
                  <h2>Videos</h2>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;