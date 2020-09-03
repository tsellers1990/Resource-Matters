import React, { useState } from 'react';
import axios from 'axios';

const PatronInfo = ()=>{
  const [contactInfo, setContactInfo] = useState({})

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
        <input name= "email" name= "email" value= {contactInfo.email} onChange= {handleInputChange} placeholder= "Email" />
        <br />
        <br />
        <p>First Name: </p>
        <input name= "firstName" name= "firstName" value= {contactInfo.firstName} onChange= {handleInputChange} placeholder= "First Name" />
        <br />
        <br />
        <p>Last Name: </p>
        <input name= "lastName" name= "lastName" value= {contactInfo.lastName} onChange= {handleInputChange} placeholder= "Last Name" />
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
        <button onClick= {()=> submitPatronInfo()}>Submit information</button>
      </div>
    </div>
  )
}

export default PatronInfo;