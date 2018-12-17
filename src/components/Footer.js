import React, { Component } from 'react';
import LogoFooter from '../assets/images/logo-vaykgear-footer-2018.png';

class Footer extends Component {
  render() {
    return (
      <div id="site-footer" className="wrapper">
        <div className="container">
          <div className="row site-footer-1">
            <div className="col-sm-4">
              <div className="footer-name">&copy; VayK Gear.</div>
            </div>
            <div className="col-sm-4">
              <img src={LogoFooter} alt=""/>
            </div>
            <div className="col-sm-4">
              <ul className="footer-menu">
                <li><a href="https://vaykgear.com/terms/" title="Terms & Conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                <li><a href="https://vaykgear.com/privacy-policy/" title="Privacy Policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="https://vaykgear.com/terms-of-use/" title="Terms of Use" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="row site-footer-2">
            <div className="col-sm-12">
              <div className="footer-social">
                <a href="https://www.facebook.com/VayK-Gear-140827451722/" title="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;