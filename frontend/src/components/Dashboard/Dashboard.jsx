import React, { useContext } from 'react';
import Fund from './Fund';
import { FundMeContext } from '../../context/fundMeContext';
import Discription from './Discription';
import ImpactAndHelp from './ImpactAndHelp';

export const Dashboard = () => {
  const { balance, contractOwner } = useContext(FundMeContext);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center p-6">
      <Discription />

      <div className="mt-12 flex flex-col md:flex-row w-full max-w-4xl items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center p-4 border-2 rounded-lg shadow-lg w-full md:w-1/2">
          <p className="text-white text-lg"><strong>Fund Raised:</strong> {balance} ETH</p>
        </div>
        <Fund />
      </div>
      
      <ImpactAndHelp />
    </div>
  );
};

export default Dashboard;
