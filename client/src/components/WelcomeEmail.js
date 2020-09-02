import React, { useState } from 'react';
import axios from 'axios';

const WelcomeEmail = ()=>{

  const [email, setEmail] = useState("")

  const handleInputChange = (e)=>{
    setEmail(e.target.val)
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
        <input id= "enter-email" placeholder= "Email Address" value= {email} onChange= {handleInputChange}></input>
        <button onClick= {()=> postEmail()}>Submit</button>
      </div>
    </div>
  )
}

export default WelcomeEmail;