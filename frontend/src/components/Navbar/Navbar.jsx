import React, { useContext } from 'react'
import { FundMeContext } from '../../context/fundMeContext';

const Navbar = () => {
  
  const {isOwner,withdrawFunds} = useContext(FundMeContext);

  return (
    <nav className='p-2 flex flex-row items-center justify-between bg-gradient-to-r from-indigo-400 to-cyan-400 '>
      <h1 className='text-xl text-white'>LifeSpring Fund</h1>
      {isOwner && <button onClick={withdrawFunds} className='m-2 p-1 px-2 font-semibold bg-lime-500 text-white'>Withdraw Funds</button>}
    </nav>
  )
}

export default Navbar