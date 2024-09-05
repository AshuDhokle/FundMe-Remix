import React, { useContext, useState, useEffect } from 'react';
import { FundMeContext } from '../context/fundMeContext';

const FundMeApp = () => {
  const {
    account,
    balance,
    fundContract,
    withdrawFunds,
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

  return (
    <div>
      <h1>FundMe dApp</h1>
      <p>Connected Account: {account}</p>
      <p>Contract Balance: {balance} ETH</p>

      <label htmlFor="amount">Amount to Fund (ETH):</label>
      <input
        type="text"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleFund}>Fund Contract</button>

      {isOwner && <button onClick={withdrawFunds}>Withdraw Funds</button>}
    </div>
  );
};

export default FundMeApp;
