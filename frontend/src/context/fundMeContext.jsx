import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { fundMeAbi } from '../../utils/ABI'; // Make sure this ABI is correct

export const FundMeContext = createContext();

export const FundMeProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [funders, setFunders] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [contractOwner,setContractOwner] = useState('');
  const fundMeContractAddress = "0x76B2fCE3046cf648D382dDD51E8d8459137106Ff"; // Replace with your deployed contract address

  useEffect(() => {
    const initBlockchain = async () => {
      if (window.ethereum) {
        try {
            const _provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(_provider);

          const _signer = _provider.getSigner();
          setSigner(_signer);

          const _contract = new ethers.Contract(fundMeContractAddress, fundMeAbi, _signer);
          setContract(_contract);

          // Request user's account and set the account state
          const accounts = await _provider.send("eth_requestAccounts", []);
          setAccount(accounts[0]);

          // Get the owner of the contract
          const owner = await _contract.i_owner();
          setContractOwner(owner);
          

          setIsOwner(owner.toLowerCase() === accounts[0].toLowerCase());
          
          // Get initial contract balance
          getContractBalance();

        } catch (error) {
          console.error("Error initializing blockchain:", error);
        }
      } else {
        console.error('Ethereum provider not found. Please install MetaMask.');
      }
    };

    initBlockchain();
  }, [fundMeContractAddress]);

  const getContractBalance = async () => {
    if (contract) {
      try {
        const balance = await provider.getBalance(contract.address);
        setBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("Failed to fetch contract balance:", error);
      }
    }
  };

  const fundContract = async (amountInEther) => {
    if (contract) {
      const amount = ethers.utils.parseEther(amountInEther);
      try {
        const tx = await contract.fund({ value: amount });
        await tx.wait();
        getContractBalance(); // Update balance after funding
      } catch (error) {
        console.error("Funding failed:", error);
      }
    }
  };

  const withdrawFunds = async () => {
    if (contract && isOwner) {
      try {
        const tx = await contract.withdraw();
        await tx.wait();
        getContractBalance(); // Update balance after withdrawal
      } catch (error) {
        console.error("Withdrawal failed:", error);
      }
    }
  };

  return (
    <FundMeContext.Provider
      value={{
        account,
        balance,
        fundContract,
        withdrawFunds,
        getContractBalance,
        funders,
        isOwner,
      }}
    >
      {children}
    </FundMeContext.Provider>
  );
};
