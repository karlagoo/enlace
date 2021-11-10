import React, { useState } from 'react'

const SignUp = () => {

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if(inputType==='firstName'){
        setFirstName(inputValue)
    } else if(inputType==='lastName'){
        setLastName(inputValue)
    } else if(inputType==='email'){
        setEmail(inputValue)
    } else if(inputType==='password'){
        setPassword(inputValue)
    }
    
    
    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    }
    console.log(body)
    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName} ${email} ${password}`);
   
  };

    return (
        <div>
       <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Sign Up</h5>
            <form id="logInForm">
            <div className="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control" name='firstName' id="firstName" aria-describedby="emailHelp" onChange={handleInputChange} placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control" name='lastName' id="lastName" aria-describedby="emailHelp" onChange={handleInputChange} placeholder="Enter email"/>
                </div>
                <div className="form-check">

                </div>
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>
            </div>
        </div>     
        </div>
    )
}

export default SignUp
