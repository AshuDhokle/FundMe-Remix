import React from 'react';
import { useContext } from 'react';
import { FundMeContext } from '../../context/fundMeContext';
const DonatorList = () => {
const {donator}  = useContext(FundMeContext);
    return (
    <div className="max-w-2xl mx-auto px-4 py-6 bg-gray-800 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-white mb-4">Donator List</h2>
      <ul className="space-y-4">
        {donators.length > 0 ? (
          donators.map((donator, index) => (
            <li key={index} className="bg-gray-700 p-4 rounded-md shadow-md flex items-center justify-between">
              <span className="text-white font-medium">{donator.name}</span>
              <span className="text-green-400">${donator.amount}</span>
            </li>
          ))
        ) : (
          <p className="text-white">No donators yet. Be the first to support!</p>
        )}
      </ul>
    </div>
  );
};

export default DonatorList;
