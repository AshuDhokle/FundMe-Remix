import React, { useContext, useState, useEffect } from 'react';
import { FundMeContext } from '../../context/fundMeContext';
import { FaRegCopy } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

const Fund = () => {
  const {
    account,
    fundContract,
    getContractBalance,
    isOwner,
  } = useContext(FundMeContext);

  const [amount, setAmount] = useState('');

  useEffect(() => {
    getContractBalance();
  }, [getContractBalance]);

  const handleFund = () => {
    if (amount) {
      fundContract(amount);
      setAmount('');
    }
  };

  const [copied, setCopied] = useState(false);

  const copyAddress = (e) => {
    navigator.clipboard.writeText(account).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });

    setTimeout(setCopied(false), 5000);
  }

  function shortenAddress(fullAddress) {
    return `${fullAddress.slice(0, 20)}...${fullAddress.slice(-4)}`
  }
  return (
    <div className='m-2 p-2 flex flex-col w-96 h-64 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg bg-opacity-60'>
      <div className='border-b-2 border-black flex flex-row items-center justify-between'>
        <h1 onClick={copyAddress} className='text-gray-200 cursor-pointer'>Account : {shortenAddress(account)}</h1>
        {copied ? <MdDone className='size-6 m-2 text-white animate-pulse bg-green-400 rounded-full p-1' /> : <FaRegCopy className='size-6 m-2 text-white ' />}
      </div>
      <div className='m-2 my-10 '>
        <label htmlFor="amount" className='m-2 text-white'>Fund (ETH):</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='m-2 p-1 bg-transparent border-b-2 text-white border-gray-300 outline-none'
        />
        <div className=' flex flex-row items-center justify-center'>
          <button
            onClick={handleFund}
            className="m-2 w-28 p-2 border-2 border-blue-500 text-blue-500 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-600"
          >
            Fund
          </button>

  
        </div>
        
      </div>
    </div>
  )
}

export default Fund