import React from 'react';
import Login from '../components/LogIn/index';
import Signup from '../components/SignIn/index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />
            <Login />
            <Signup />
            <Footer />
        </div>
    )
}

export default LoginPage;