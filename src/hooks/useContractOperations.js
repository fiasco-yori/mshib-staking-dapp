import Web3 from "web3";
import ConnectedWeb3Provider from "../wallet/ConnectedWeb3Provider";
export default function useContract() {
  const web3I = new Web3(Web3.givenProvider);

  const isWeb3Available = async () => {
    if (Web3.givenProvider != null) return true;
    if (ConnectedWeb3Provider.web3 !== null) return true;
    return false;
  };

  const getAccountInfo = async () => {
    if (Web3.givenProvider !== null && web3I.eth !== undefined) {
      let accounts = await web3I.eth.getAccounts().catch(() => {});
      if (accounts[0] !== undefined) {
        ConnectedWeb3Provider.web3 = web3I;
        return accounts[0];
      }
    }

    if (
      ConnectedWeb3Provider.web3 !== undefined &&
      ConnectedWeb3Provider.web3 !== null
    ) {
      let accounts = await ConnectedWeb3Provider.web3.eth
        .getAccounts()
        .catch(() => {});
      // console.log(accounts)
      if (accounts[0] !== undefined) {
        return accounts[0];
      }
    }
  };

  const requestAccounts = async () => {
    await web3I.eth.requestAccounts();
    const accounts = await web3I.eth.getAccounts().catch(() => {});
    return accounts[0];
  };

  const getNetwork = async () => {
    try {
      const result = await ConnectedWeb3Provider.web3.eth.net
        .getId()
        .catch(() => {});
      //console.log(result)

      return result;
    } catch (error) {
      return -1;
    }
  };

  return { requestAccounts, getAccountInfo, getNetwork, isWeb3Available };
}
