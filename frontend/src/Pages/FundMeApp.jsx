import React, {useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Dashboard } from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';

const FundMeApp = () => {
  
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
};

export default FundMeApp;
