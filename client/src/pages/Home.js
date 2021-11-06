import React from 'react';
import { useQuery } from '@apollo/client';

import LogIn from '../components/LogIn';

const Home = () => {
  
  return (
    <main>
      <div className="flex-row justify-center">
        <LogIn/>
      </div>
    </main>
  );
};

export default Home;
