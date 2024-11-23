import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Container, Form } from 'react-bootstrap';

const LogIn = () => {
    const [userLogIn, { error }] = useMutation(USER_LOGIN);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)

        return name === 'email' ? setEmail(value) : setPassword(value);
    };

    const handleValidation = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await userLogIn({
                variables: { email: email, password: password },
            });

            const token = response.data.login.token;
            Auth.login(token);

        }
        catch (err) {
            console.log(err);
        }

    };

    return (
        <div>
            <Container>
                <hr />
                <h1 className="text-white">Log In</h1>
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
                    <button type="submit" className="btn btn-primary" onClick={handleFormSubmit} style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px" }}>Log In!</button>
                </Form>
            </Container>
            <hr />
        </div>
    )
}

export default LogIn
