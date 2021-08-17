import React, { Component } from 'react';
import './Navbar.css';
import nfqLogo from '../Navbar/Nfq.png';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbarContainer">
        <div className="navbarImg">
          <Link to="/">
            <img src={nfqLogo} alt="nfq-logo" />
          </Link>
        </div>
        <div className="navbarLink">
          <Link to="/addNewTask">Add New Task</Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
