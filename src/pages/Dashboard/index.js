import TitleBar from '../../components/TitleBar/TitleBar';
import Subtitle from '../../components/Subtitle/Subtitle';

import React, { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import logo from '../../images/Binance-Coin-BNB-icon.png';

import ConnectedWeb3Provider from "../../wallet/ConnectedWeb3Provider";
import useContract from "../../hooks/useContractOperations";
import {IRCIERC20, wbnbABI, stakingABI, mshibABI} from '../../contracts/contractABI'
import Web3 from "web3";

function Dashboard(props) {

  const { getNetwork, getAccountInfo, isWeb3Available, requestAccounts } = useContract();

  const getWeb3 = ()=>{
    return new Web3(
        "https://speedy-nodes-nyc.moralis.io/39e641be1684d9031fa06951/bsc/testnet"
        //"https://speedy-nodes-nyc.moralis.io/89b4f5c6d2fc13792dcaf416/bsc/mainnet"
      );
      
  }
    
  const web3 = getWeb3();

  // const mnxAddress = "0x9137D3C7d408F29571868065Ae7110717EFDF079";
  const mnxAddress = "0x4ee83441a22BEB71eaAc91a225C39B6eC53D4FDd"

  const wbnbAddress = "0xae13d989dac2f0debff460ac112a837c89baa7cd"
  const stakingAddress = "0x32C7A26ed1243B9F5Ec331598B4b1C01D11F8d97"
  const mshibAddress = "0x86c3AcBF85A731F82A18BA99C144381c64998c20"


  const mnxContract = new web3.eth.Contract(
    basicABI,
    mnxAddress
  );


  const CoinGeckoAPIForBNB = 'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd';

  const getBNBPrice = async () => {
    try {
        // const result = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT', {
        //     method: 'GET',
        // });
        // const data = await result.json();
        // return data.price;
        return 0;
    } catch (e) {
        return 0;
    }
    return 0;
  }

  const getMNXPrice = async () => {
    try {
        // const result = await fetch(CoinGeckoAPIForMNX, {
        //     method: 'GET',
        // });
        // const data = await result.json();
        // return data.minix.usd;
        return 0;
    } catch (e) {
        return 0;
    }
    return 0;
  }
 
  const fetchData = async () => {

    const bnbpriceFrom = await getBNBPrice();
    setBnbPrice(bnbpriceFrom);

    const mnxpriceFrom = await getMNXPrice();
    setMnxPrice(mnxpriceFrom);

    console.log(mnxPrice);

    const isWeb3 = await isWeb3Available();

    const rewardTAmountFrom = await mnxContract.methods.getTotalDividendsDistributed().call();
    setTRewardAmount(parseFloat(web3.utils.fromWei(rewardTAmountFrom.toString(), "ether")).toFixed(3));

    if(!isWeb3) {
      return;
    }

    const account = await getAccountInfo();

    if(isWeb3 && account != null && account != undefined) {

      const rewardAmountFrom = await mnxContract.methods.withdrawableDividendOf(account).call();
      setRewardAmount(parseFloat(web3.utils.fromWei(rewardAmountFrom.toString(), "ether")).toFixed(3));  

      const mnxBalanceFrom = await mnxContract.methods.balanceOf(account).call();
      setMnxBalance(parseFloat(web3.utils.fromWei(mnxBalanceFrom.toString(), "ether")).toFixed(3));  
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  const [mnxBalance, setMnxBalance] = React.useState(0);
  const [rewardAmount, setRewardAmount] = React.useState(0);
  const [trewardAmount, setTRewardAmount] = React.useState(0);
  const [bnbPrice, setBnbPrice] = React.useState(0);
  const [mnxPrice, setMnxPrice] = React.useState(0);

  
  

  const claim = async () => {

    const isWeb3 = await isWeb3Available();

    if(!isWeb3) {
      return;
    }

    const account = await getAccountInfo();

    if (account === null || account === undefined) return false;

    mnxContract.methods
      .claim()
      .send( { from: account } )
      .then(function (e) {
        fetchData();
      })
      .catch(() => {
        // alert('something net wrong');
      });
  }

  return (
    <div>
      <div className="container-fluid">
        <TitleBar title="Dashboard" iconClasses="fas fa-th" account={props.account}/>
        <Subtitle subtitle="" />
      </div>
      <div className='container'>
        <Card sx={{ minWidth: 275, maxWidth: 600, ml: 'auto', mr: 'auto', mb: 5, background: '#33343B', textAlign: 'center', borderRadius: '20px', padding: 3 }}>
            <CardContent>
                <Typography sx={{ fontSize: 25, mb: 3 }} color="text.primary" gutterBottom>
                    Stake MSHIB Earn WBNB
                </Typography>
                <img src={logo} alt="Xen Finance" style={{width: '100px'}} />
                <Typography sx={{ mt: 2, fontSize: 30 }} color="text.secondary">
                0.00000
                </Typography>
                <Typography variant="body2" sx={{mb: 3}}>
                WBNB Earned
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button variant="contained" sx={{width: '100%', pt: 1.5, pb: 1.5 }}>Stake</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" sx={{width: '100%', pt: 1.5, pb: 1.5 }}>Claim</Button>  
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
      </div>
      <div className="container">
        <div className="row row-cols-md-2 row-cols-1">
          <div className="col">
            <div className="tile">
              <h2 className="mb-2">{mnxBalance}</h2>
              <p className="text-secondary mb-3">APY</p>
              <p className="mb-0 text-success">$0.00</p>
            </div>
          </div>
          <div className="col">
            <div className="tile">
            <h2 className="mb-2">$ {bnbPrice}</h2>
              <p className="text-secondary mb-3">Your Staked</p>
              <p className="mb-0 text-success">$0.00</p>
            </div>
          </div>
          <div className="col">
            <div className="tile">
              <h2 className="mb-2">{rewardAmount} MJSHIB</h2>
              <p className="text-secondary mb-3">Total Staked</p>
              <p className="mb-0 text-success">$0.00</p>
            </div>
          </div>
          <div className="col">
            <div className="tile">
              <h2 className="mb-2">{trewardAmount} WBNB</h2>
              <p className="text-secondary mb-3">WBNB Remaining</p>
              <p className="mb-0 text-success">$0.00</p>
            </div>
          </div>
       </div>
       {rewardAmount > 0 &&
        <div className="row">
          <div className="col">
            <div className="tile text-center ">
              <button className="btn btn-success btn-lg p-3 px-5 fw-bold" onClick={() => claim()}>Claim Rewards</button>
            </div>
          </div>
        </div>
       }
        
      </div>

    </div>
  );
}

export default Dashboard;