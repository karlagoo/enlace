import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_USER } from '../../utils/mutations';


const SignUp = () => {

const [userName, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [addUser, {error}] = useMutation(CREATE_USER);

const handleInputChange = (e) => {
    const { value, name } = e.target;
    
    
    if( name === 'userName' ){
        setUsername(value)
    } else if( name === 'email' ){
        setEmail(value)
    } else if( name === 'password' ){
        setPassword(value)
    }
   
  };

  const handleFormSubmit =  (e) => {
    e.preventDefault();

    const body = {
        userName: userName,
        email: email,
        password: password
    }
    console.log(body)

    try {
        const { data } =  addUser({
            variables: { userName, email, password }
        })
        window.location.reload();
    }
    catch (err) {
        console.error(err);
    }
    
   
  };

    return (
        <div>
       <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Sign Up</h5>
            <form id="logInForm">
            <div className="form-group">
                    <label for="userName">Username</label>
                    <input type="text" className="form-control" name='userName' id="userName" aria-describedby="userNameHelp" onChange={handleInputChange} placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" name='email' id="email" aria-describedby="emailHelp" onChange={handleInputChange} placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="text" className="form-control" name='password' id="password" aria-describedby="passwordHelp" onChange={handleInputChange} placeholder="Enter Password"/>
                </div>
                <div className="form-check">

                </div>
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Create!</button>
            </form>
            </div>
        </div>     
        </div>
    )
}

export default SignUp;