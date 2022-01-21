import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

import Web3 from "web3";

import { httpRPCEndpoint, ChainId } from "../contracts/ContractProvider";

import ConnectedWeb3Provider from "../wallet/ConnectedWeb3Provider";

const walletLinkImg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYzNSAyLjExN2EzLjg4OSAzLjg4OSAwIDAwLTUuNTIxIDBMNi44OSA1LjMzNWEzLjg5NCAzLjg5NCAwIDAwLTEuMDkgMy40MDRjLjA4My41MDYuMjY4IDEuMDExLjU1MyAxLjQ2Ni4xNTEuMjUzLjMzNi40NzIuNTM3LjY5MWwuNjIxLjYyNCAxLjE0MS0xLjE0Ni0uNjItLjYyNGEyLjEwNSAyLjEwNSAwIDAxLS40ODctLjc0MSAyLjM0IDIuMzQgMCAwMS41MDMtMi41MWwzLjIwNi0zLjIyYTIuMjkzIDIuMjkzIDAgMDEzLjIzOSAwYy44OS44OTQuODkgMi4zNDMgMCAzLjI1M2wtMS41MjcgMS41MzNjLjIzNC42NC4zMzUgMS4zMzEuMzAyIDIuMDA1bDIuMzgzLTIuMzkyYzEuNTEtMS41MzQgMS40OTMtNC4wMjgtLjAxNy01LjU2MXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBkPSJNMTEuMjcxIDcuNzQ1YTMuMTMgMy4xMyAwIDAwLS41NTQtLjY5bC0uNjItLjYyNC0xLjE0MiAxLjE0Ni42MjEuNjIzYy4yMTguMjIuMzg2LjQ4OS40ODcuNzU4LjMzNS44MjYuMTY3IDEuODItLjUwNCAyLjQ5NGwtMy4yMDUgMy4yMTlhMi4yOTMgMi4yOTMgMCAwMS0zLjI0IDAgMi4zMTYgMi4zMTYgMCAwMTAtMy4yNTJsMS41MjgtMS41MzRhNC44MTUgNC44MTUgMCAwMS0uMjg1LTIuMDA1bC0yLjM4MyAyLjM5M2EzLjkyNyAzLjkyNyAwIDAwMCA1LjU0NCAzLjkwOSAzLjkwOSAwIDAwNS41MzggMGwzLjIwNS0zLjIxOWEzLjk1OCAzLjk1OCAwIDAwMS4wOTEtMy40MDQgNC4yMTEgNC4yMTEgMCAwMC0uNTM3LTEuNDQ5eiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==`;

const walletLink = new WalletLink({
  appName: "XEN Finance DApp",
  appLogoUrl: "https://xen.finance/static/media/xen-logo-dark.7b8afd53.png",
  darkMode: false,
});

const ConnectWalletModal = ({ walletModal, setWalletModal }) => {
  //const [open, setOpen] = React.useState(false);
  const [chainError, setChainError] = React.useState(false);

  const onMetamaskConnect = async () => {
    const web3I = new Web3(Web3.givenProvider);
    await web3I.eth.requestAccounts().catch(() => {});
    //props.close();
    setWalletModal(!walletModal);
  };

  const onWalletConnect = async () => {
    const wcProvider = new WalletConnectProvider({
      chainId: ChainId,
      rpc: {
        56: httpRPCEndpoint,
        97: httpRPCEndpoint
      },
    });

    wcProvider.on("unhandledRejection", (error) => {
      // Will print "unhandledRejection err is not defined"
      console.log("unhandledRejection", error.message);
    });

    // Subscribe to accounts change
    wcProvider.on("accountsChanged", (accounts) => {
      console.log(accounts);
      console.log(wcProvider);
      const walletConnectWeb3 = new Web3(wcProvider);
      ConnectedWeb3Provider.web3 = walletConnectWeb3;
      ConnectedWeb3Provider.wallet = "WalletConnect";
    });

    // Subscribe to chainId change
    wcProvider.on("chainChanged", (chainId) => {
      console.log(chainId);
    });

    // Subscribe to session disconnection
    wcProvider.on("disconnect", (code, reason) => {
      console.log(code, reason);
      ConnectedWeb3Provider.web3 = null;
    });

    try {
      console.log(wcProvider);

      const result = await wcProvider.enable().catch((err) => {
        console.log(err);
        wcProvider.qrcodeModal.close();
      });
      // console.log(bscProvider)
      if (wcProvider.chainId !== ChainId) {
        // wrong chain.
        setChainError(true);
        setWalletModal(!walletModal);
        wcProvider.disconnect();
      } else {
        // connected on correct chain

        // end of
        //props.close();
        setWalletModal(!walletModal);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onWalletLink = () => {
    const ethereum = walletLink.makeWeb3Provider(httpRPCEndpoint, 1);
    const walletLinkWeb3 = new Web3(ethereum);
    ConnectedWeb3Provider.web3 = walletLinkWeb3;
    ConnectedWeb3Provider.wallet = "WalletLink";
  };

  return (
    <Dialog onClose={() => setWalletModal(!walletModal)} open={walletModal}>
      <DialogTitle sx={{ textAlign: "center", p: 3 }}>
        <Typography variant="h3">Choose Wallet</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack sx={{ p: 3 }} spacing={3}>
          <Grid
            sx={{ cursor: "pointer" }}
            justifyContent="space-between"
            alignItems="center"
            container
            onClick={() => onMetamaskConnect()}
          >
            <Grid sx={{ pr: 3 }} item xs={4}>
              <img
                alt="Metamask"
                src={require(`./logos/metamask.svg`).default}
                height="32"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography>Metamask</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{ cursor: "pointer" }}
            justifyContent="space-between"
            alignItems="center"
            container
            onClick={() => onWalletConnect()}
          >
            <Grid sx={{ pr: 3 }} item xs={4}>
              <img
                alt="WalletConnect"
                src={require(`./logos/walletconnect.svg`).default}
                height="32"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography>Wallet Connect</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{ cursor: "pointer" }}
            justifyContent="space-between"
            alignItems="center"
            container
            onClick={() => onWalletLink()}
          >
            <Grid sx={{ pr: 3 }} item xs={4}>
              <img
                alt="WalletLink"
                src={require(`./logos/coinbase.png`).default}
                height="32"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography>Coinbase</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{ cursor: "pointer" }}
            justifyContent="space-between"
            alignItems="center"
            container
            onClick={() => onMetamaskConnect()}
          >
            <Grid sx={{ pr: 3 }} item xs={4}>
              <img
                alt="Metamask"
                src={require(`./logos/TWT.svg`).default}
                height="32"
              />
            </Grid>
            <Grid item xs={8}>
              <Typography>Trust Wallet</Typography>
            </Grid>
          </Grid>
        </Stack>
      </DialogContent>
    </Dialog>
    // <div id="wallet-modal">
    //   <div className="title"></div>

    //   {chainError === true ? (
    //     <div>
    //       <div>WRONG NETWORK!</div>
    //       <div>First connect your wallet to BSC.</div>
    //     </div>
    //   ) : (
    //     <div>
    //       <div>
    //         <div onClick={() => onMetamaskConnect()} className="modal-row">
    //           <div>Metamask</div>

    //           <div>
    //             <img alt="Metamask" src={require(`./logos/metamask.svg`).default} height="40" />
    //           </div>
    //         </div>

    //         <div onClick={() => onMetamaskConnect()} className="modal-row">
    //           <div>Trust Wallet</div>
    //           <div>
    //             <div>
    //               <img alt="Trust Wallet" src={require(`./logos/TWT.svg`).default} height="40" />
    //             </div>
    //           </div>
    //         </div>
    //         {/*
    //         <div onClick={() => onWalletConnect()} className="modal-row">
    //           <div>WalletConnect</div>
    //           <div>
    //             <img
    //               alt="Metamask"
    //               src={require(`./logos/walletconnect.svg`).default}
    //               height="40"
    //             />
    //           </div>
    //         </div> */}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default ConnectWalletModal;
