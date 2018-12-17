import React, { Component } from 'react';
import Logo from '../assets/images/logo-vaykgear-2018.png';
import LogoSm from '../assets/images/logo-vaykgear-sm-2018.png';

class Header extends Component {
  render() {
    return (
      <div id="site-header" className="wrapper site-header-interior">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <img className="site-logo-lg" src={Logo} alt=""/>
              <img className="site-logo-sm" src={LogoSm} style={{display: 'none'}} alt=""/>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
              <div id="site-top-bar">
                <div className="top-element">RESORT VACATION PROPERTIES OF ST. GEORGE ISLAND PARTNER Partner</div><div className="top-element hidden-xs">888-577-7412</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;