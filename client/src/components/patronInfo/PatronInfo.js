import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PatronInfo = ({ email })=>{
  const [contactInfo, setContactInfo] = useState({
    email: email,
    firstName: "",
    lastName: "",
    occupation: "",
    phoneNumber: "",
    address: ""
  })

  const handleInputChange = (e) => {
    let nam = e.target.name
    let val = e.target.value
    setContactInfo({...contactInfo, [nam]: val})
  }

  const submitPatronInfo = ()=>{
    axios.post("/api/patron/add", {
      email: contactInfo.email,
      firstName: contactInfo.firstName,
      lastName: contactInfo.lastName,
      occupation: contactInfo.occupation,
      phoneNumber: contactInfo.phoneNumber,
      address: contactInfo.address
    })
  }

  return(
    <div className= "patron-info">
      <h2>Thank you for your participation</h2>
      <h5>Please enter your contact information here to stay informed</h5>
      <div>
        <p>Email:</p>
        <input name= "email" value= {contactInfo.email} onChange= {handleInputChange} placeholder= "Email" />
        <br />
        <br />
        <p>First Name: </p>
        <input name= "firstName" value= {contactInfo.firstName} onChange= {handleInputChange} placeholder= "First Name" />
        <br />
        <br />
        <p>Last Name: </p>
        <input name= "lastName" value= {contactInfo.lastName} onChange= {handleInputChange} placeholder= "Last Name" />
        <br />
        <br />
        <p>Occupation: </p>
        <input name= "occupation" value= {contactInfo.occupation} onChange= {handleInputChange} placeholder= "Occupation" />
        <br />
        <br />
        <p>Phone Number: </p>
        <input name= "phoneNumber" name= "phoneNumber" value= {contactInfo.phoneNumber} onChange= {handleInputChange} placeholder= "Phone Number" />
        <br />
        <br />
        <p>Address: </p>
        <input name= "address" name= "address" value= {contactInfo.address} onChange= {handleInputChange} placeholder= "Address" />
        <br />
        <br />
        <Link to= "/" >
          <button onClick= {()=> submitPatronInfo()}>Submit information</button>
        </Link>
      </div>
    </div>
  )
}

export default PatronInfo;