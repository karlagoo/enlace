import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignIn';
import Footer from '../components/Footer';



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <main>
      <div className="flex-row justify-center">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Header />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <LogIn />
        <SignUp />
        <script src='/login.js'/> 
        <InfoSection {...homeObjThree} />
      </div>
      <Footer />
    </main>
  );
};

export default Home;