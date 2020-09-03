import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const WelcomeEmail = ()=>{

  const [email, setEmail] = useState('')

  const handleInputChange = (e)=>{
    setEmail(e.target.value)
  }

// CAN EITHER POST EMAIL TO DB HERE OR PASS STATE TO ANOTHER PAGE WHERE THE USER INPUTS THE REST OF THEIR INFORMATION
  const postEmail = ()=>{
    axios.post("/api/email", email)
  }

  return(
    <div className= "row welcome-div">
      <div className= "col">
        <h2 id= "welcome">Welcome</h2>
        <p>Please enter your email to sign up</p>
        <input id= "enter-email" placeholder= "Email Address" value= {email.email} onChange= {handleInputChange}></input>
        <Link to= {{
          pathname: `/patronInfo/signup`, 
          email: email
        }}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  )
}

export default WelcomeEmail;