import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';


import Home from './pages/Home/index';
import Dashboard from './pages/Dashboard/index';

import useContract from "./hooks/useContractOperations";
import { useInterval } from "./hooks/useInterval";
import { ChainId, Network,} from "./contracts/ContractProvider";

import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [account, setAccount] = useState(false);
  const [wrongNetwork, setWrongNetwork] = React.useState(false);
  const { getNetwork, getAccountInfo, isWeb3Available } = useContract();
  const CONTRACT_POLLING_INTERVAL = 3000; // millis

  useInterval(() => {
    try {
      getCurrentNetwork();
      getAccount();
    } catch (error) {
      console.log(error);
    }
  }, CONTRACT_POLLING_INTERVAL);

  async function getAccount() {
    const isWeb3 = await isWeb3Available();
    if (isWeb3) {
      const currentAccount = await getAccountInfo();
      if (currentAccount === undefined) {setAccount(null);}
      if (currentAccount !== account && currentAccount!==undefined) {setAccount(currentAccount);}
    } else {
      setAccount(null);
    }
  }

  async function getCurrentNetwork() {
    const network = await getNetwork();
    if (network !== ChainId && network !== -1 && network !== undefined) {
      setWrongNetwork(true);
    } else {
      setWrongNetwork(false);
    }
  }

  useEffect(() => {
    getCurrentNetwork();
    getAccount();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
    <Router>
      <main className="dashboard-wrapper">
        <div className="dashboard-content">
          <div>
            <Routes>
              <Route path="/" index element={<Dashboard account={account} />} />
            </Routes>
            <Outlet />
          </div>
        </div>
      </main>
    </Router>
    </ThemeProvider>
  );
}

export default App;
