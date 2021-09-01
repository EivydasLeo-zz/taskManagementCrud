import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      currentYear: new Date().getFullYear(),
    };
  }
  render() {
    return (
      <footer className="footer-container">
        <p className="footer__text">
          Project created by Eivydas Leonavicius. All rights reserved &copy; {this.state.currentYear}
        </p>
      </footer>
    );
  }
}

export default Footer;
