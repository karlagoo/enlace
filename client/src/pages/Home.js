import React from 'react';
import { useQuery } from '@apollo/client';

import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';



const Home = () => {
  
  return (
    <main>
      <div className="flex-row justify-center">
        <LogIn/>
        <SignUp/>
        <script src='/login.js'/> 
      </div>
    </main>
  );
};

export default Home;
