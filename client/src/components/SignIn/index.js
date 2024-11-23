import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_USER, USER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Form, Container } from 'react-bootstrap';


const SignUp = () => {
const [userName, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [validated, setValidated] = useState(false);
const [addUser, {error}] = useMutation(CREATE_USER);
const [userLogIn, { err }] = useMutation(USER_LOGIN);

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

  const handleValidation = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
        e.stopPropagation();
    }
    setValidated(true);
} 

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
        .then(async () => {
            const response  = await userLogIn({
                variables: { email: email, password: password },
            });
    
            const token = response.data.login.token;
            Auth.login(token);
        })
        .catch((err) => console.log(err))
    }
    catch (err) {
        console.error(err);
    }
    
   
  };

    return (
        <div>
            <Container>
                <h1 className="text-white">Sign Up</h1>
                    <Form noValidate validated={validated} onChange={handleValidation}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label className="text-white">Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid email address!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label className="text-white">Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Username"
                                name="userName"
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a username!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter Password"
                                name="password"
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a password!</Form.Control.Feedback>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px"}} onClick={handleFormSubmit}>Create Account!</button>
                    </Form>
            </Container> 
            <hr/>   
        </div>
    )
}

export default SignUp;