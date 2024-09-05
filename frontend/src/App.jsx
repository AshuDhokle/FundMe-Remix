import React from 'react';
import ReactDOM from 'react-dom/client';
import { FundMeProvider } from './context/fundMeContext';
import FundMeApp from './Pages/FundMeApp';

const App = () => {
  return (
    <FundMeProvider>
      <FundMeApp />
    </FundMeProvider>
  );
};

export default App