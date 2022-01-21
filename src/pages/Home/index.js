import React, { useState, useEffect } from "react";

import {
  NavLink
} from "react-router-dom";

import logo from '../../images/xen-logo-dark.png';

function Home(props) {

  return (
    <div className="m-n4">

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Xen Finance" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav text-center">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Whitepaper</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Tokenomics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">How to buy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Socials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Contract</a>
                </li>
              </ul>
              <div className="text-center">
                <NavLink className={"btn btn-primary"} to="/dashboard">
                  Staking Portal
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        {/* Header */}
        <section className="py-5 bg-header text-white">
          <div className="container py-5">
            <div className="my-5">
              <div className="row">
                <div className="col-xl-8 col-md-9 col-12 text-md-start text-center">


                  <h1>Xen Finance</h1>
                  <ul>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                  </ul>
                  <div>
                    <button className="btn btn-light me-2" type="button">Whitepaper</button>
                    <button className="btn btn-light me-2" type="button">Buy</button>
                    <button className="btn btn-light me-2" type="button">Stake</button>
                    <button className="btn btn-primary me-2" type="button">Join the community</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary-dark py-5 text-white">
          <div className="container text-center">
            <div className="row mb-n5 align-items-center">
              <div className="col-auto mb-5">
                <button className="btn btn-outline-primary text-white" type="button">View Live Chart</button>
              </div>
              <div className="col mb-5">
                <p className="fw-bold mb-0">$XXXX</p>
                <p className="mb-0">Total Raised</p>
              </div>
              <div className="col mb-5">
                <p className="fw-bold mb-0">$XX.XXXX</p>
                <p className="mb-0">Total Price</p>
              </div>
              <div className="col mb-5">
                <p className="fw-bold mb-0">$X,XXX,XXX</p>
                <p className="mb-0">Market Cap</p>
              </div>
              <div className="col mb-5">
                <p className="fw-bold mb-0">X</p>
                <p className="mb-0">Total Burned</p>
              </div>
              <div className="col mb-5">
                <p className="fw-bold mb-0">X</p>
                <p className="mb-0">Total Distributed</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-primary py-5 text-white">
          <div className="container my-4 text-center">
            <h2 className="mb-4">Lorem Ipsum</h2>
            <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 mx-n5 mb-n5">
              <div className="col px-5 mb-5">
                <p className="h2"><i className="fas fa-search-dollar" /></p>
                <p className="mb-0">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet</p>
              </div>
              <div className="col px-5 mb-5">
                <p className="h2"><i className="far fa-chart-bar" /></p>
                <p className="mb-0">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet</p>
              </div>
              <div className="col px-5 mb-5">
                <p className="h2"><i className="fas fa-coins" /></p>
                <p className="mb-0">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-5">
          <div className="container my-4">
            <h2 className="mb-5 text-center">How to buy Xen</h2>
            <div className="row row-cols-md-2 row-cols-1 mb-n5">
              <div className="col mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="circle-primary">
                      <p>1</p>
                    </div>
                  </div>
                  <h3 className="mb-0">Get a crypto wallet that works with Ethereum</h3>
                </div>
                <p className="mb-3">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet.</p>
                <button className="btn btn-primary" type="button">
                  Get placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
                <button className="btn btn-gray ms-2" type="button">
                  Get placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light py-5">
          <div className="container my-4">
            <div className="row row-cols-md-2 row-cols-1 mx-n5 mb-n5">
              <div className="col px-5 mb-5" />
              <div className="col px-5 mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="circle-primary">
                      <p>2</p>
                    </div>
                  </div>
                  <h3 className="mb-0">Buy Ethereum</h3>
                </div>
                <p className="mb-3">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet.</p>
                <button className="btn btn-primary" type="button">
                  Buy placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
                <button className="btn btn-gray ms-2" type="button">
                  Buy placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-5">
          <div className="container my-4">
            <div className="row row-cols-md-2 row-cols-1 mx-n5 mb-n5">
              <div className="col px-5 mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="circle-primary">
                      <p>3</p>
                    </div>
                  </div>
                  <h3 className="mb-0">Choose a method to buy</h3>
                </div>
                <p className="mb-3">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet.</p>
                <button className="btn btn-primary" type="button">
                  Get placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
                <button className="btn btn-gray ms-2" type="button">
                  Get placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
              </div>
              <div className="col px-5 mb-5" />
            </div>
          </div>
        </section>
        <section className="bg-light py-5">
          <div className="container my-4">
            <div className="row row-cols-md-2 row-cols-1 mx-n5 mb-n5">
              <div className="col px-5 mb-5" />
              <div className="col px-5 mb-5">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <div className="circle-primary">
                      <p>4</p>
                    </div>
                  </div>
                  <h3 className="mb-0">Staking</h3>
                </div>
                <p className="mb-3">Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet.</p>
                <button className="btn btn-primary" type="button">
                  Get placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
                <button className="btn btn-gray ms-2" type="button">
                  Get placeholder
                  <span className="btn-append">
                    <i className="fas fa-download" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-primary py-5 text-white">
          <div className="container text-center">
            <div className="row mx-n5 mb-n5 justify-content-center">
              <div className="col-auto px-5 mb-5">
                <a className="btn-social-white" href="#"><i className="fab fa-discord fa-fw" /></a>
              </div>
              <div className="col-auto px-5 mb-5">
                <a className="btn-social-white" href="#"><i className="fab fa-telegram fa-fw" /></a>
              </div>
              <div className="col-auto px-5 mb-5">
                <a className="btn-social-white" href="#"><i className="fab fa-twitter fa-fw" /></a>
              </div>
              <div className="col-auto px-5 mb-5">
                <a className="btn-social-white" href="#"><i className="fab fa-reddit fa-fw" /></a>
              </div>
              <div className="col-auto px-5 mb-5">
                <a className="btn-social-white" href="#"><i className="fab fa-facebook-square fa-fw" /></a>
              </div>
              <div className="col-auto px-5 mb-5">
                <a className="btn-social-white" href="#"><i className="fab fa-youtube fa-fw" /></a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary-dark py-5 text-white">
          <div className="container">
            <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 mb-n5">
              <div className="col mb-5">
                <p className="lead fw-bold mb-3">Xen Interactions</p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Staking</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Buyer's Portal</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Buy Xen</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Liquidity Mining</a></p>
              </div>
              <div className="col mb-5">
                <p className="lead fw-bold mb-3">Resources</p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Contract</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Whitepaper</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Branding Guide</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Dextools Chart</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Coingecko</a></p>
              </div>
              <div className="col mb-5">
                <p className="lead fw-bold mb-3">Legal</p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Privacy Policy</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Terms &amp; Conditions</a></p>
                <p className="mb-2"><a href="#" className="text-white text-decoration-none">Disclaimer</a></p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Home;