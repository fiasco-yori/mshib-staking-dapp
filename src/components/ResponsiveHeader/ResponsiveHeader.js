import {
  Link
} from "react-router-dom";

import logo from '../../images/logo.jpg';
import React from "react";

import { useState, useEffect } from "react";
import ConnectWalletModal from "../../wallet/ConnectWalletModal";

function ResponsiveHeader(props) {
  const [walletModal, setWalletModal] = useState(false);
  return (
      <>
      <ConnectWalletModal
              setWalletModal={setWalletModal}
              walletModal={walletModal}
      />
    <div className="d-block mb-5">
      <div className="row mb-3">
        <div className="text-center col-auto">
          <Link to={'/'} className="mb-5">
            <img src={logo} alt="Xen Finance" style={{width: '100px'}} />
          </Link>
        </div>

        <div className="col text-end d-flex align-items-center justify-content-end">
          {
            (props.account===null) ?
                <button className="btn btn-success end-0" type="button" onClick={() => setWalletModal(true)}>
                  <i className="fas fa-cog fa-fw me-2" />
                  Connect wallet</button>:
                <button className="btn btn-success end-0" type="button">
                  {props.account && props.account.substr(0, 6)}...
                  {props.account &&
                  props.account.substr(
                      props.account && props.account.length - 3,
                      3
                  )}
                </button>
          }
          {/*<button type="button" className="btn btn-primary position-fixed me-4 end-0" onClick={toggleSidebar}>*/}
          {/*  <i className="fas fa-bars"></i>*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
        </>
  );

  function toggleSidebar() {
    document.getElementById('div_sidebar').classList.add('active');
  }
}

export default ResponsiveHeader;
