import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import { USER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LogIn = () => {

const [userLogIn, { error }] = useMutation(USER_LOGIN);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try{
        const response  = await userLogIn({
            variables: { email: email, password: password },
        });

        const token = response.data.login.token;
        Auth.login(token);
     
    }
    catch(err){
        console.log(err);
    }
   
  };

    return (
        <div>
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title'>Log In</h5>
            <form id="logInForm">
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" name='email' id="emailInput" aria-describedby="emailHelp" onChange={handleInputChange} placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name='password' id="passwordInput" onChange={handleInputChange} placeholder="Password"/>
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

export default LogIn
