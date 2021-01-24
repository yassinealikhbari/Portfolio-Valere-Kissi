import React from "react";
import './Header.css';
import Menu from '../navbar/Menu'
import logo from './../../assets/images/4eyp-logo.png';

const Header = () => {
  return (
    <div>
      <div class="header-container" >
        <div class="header-content" >
          <h1 id="header-title">VALERE KISSI</h1>
          <h4 id="subtitle">CINEMATOGRAPHER</h4>
        </div>
      </div>
      <div id="hero-logo">
        <img src={logo} alt="4EverYoung pictures logo" />
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Header;