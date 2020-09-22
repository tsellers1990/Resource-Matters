import React, { useState, setState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const WelcomeEmail = () => {
  let userEmail;

  // state = {

  // }

  const [email, setEmail] = useState("");

  const handleInputChange = () => {
    // userEmail = document.getElementById("user-email").value;
    // this.setState({
    //   email: userEmail,
    // });
  };

  const handleSubmit = (data) => {
    // this.setState({
    //   email: data,
    // });
    console.log(data)
  };
  // CAN EITHER POST EMAIL TO DB HERE OR PASS STATE TO ANOTHER PAGE WHERE THE USER INPUTS THE REST OF THEIR INFORMATION
  // const postEmail = ()=>{
  //   axios.post("/api/email", email)
  // }

  return (
    <div className="row welcome-div">
      <div className="col">
        <h2 id="welcome">Welcome</h2>
        <p>Please enter your email to sign up</p>
        <input
          id="user-email"
          placeholder="Email Address"
          value={email.email}
          onChange={() => handleInputChange()}
        ></input>
        <button onClick={() => handleSubmit(userEmail)}>Submit</button>

        {/* <Link to= {{
          pathname: `/patronInfo/signup`, 
          email: userEmail
        }}>
          <button onClick = {() => handleSubmit(userEmail)}>Submit</button>
        </Link> */}
      </div>
    </div>
  );
};

export default WelcomeEmail;
