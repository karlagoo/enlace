import React, {useState} from 'react';
import Login from '../components/LogIn/index';
import Signup from '../components/SignIn/index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Login />
            <Signup />
            <Footer />
        </div>
    )
}

export default LoginPage;