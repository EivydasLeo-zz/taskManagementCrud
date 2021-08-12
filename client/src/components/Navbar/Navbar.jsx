import React, { Component } from 'react';
import './Navbar.css';
import nfqLogo from '../Navbar/Nfq.png';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbarContainer">
        <div className="navbarImg">
          <img src={nfqLogo} alt="nfq-logo" />
        </div>
      </div>
    );
  }
}

export default Navbar;
