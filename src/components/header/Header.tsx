import React from "react";
import './Header.css';
import { Menu } from '../menu/Menu'
import logo from './../../assets/images/4eyp-logo.png';

export interface IHeaderProps {
}

export interface IHeaderState {
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div>
        <div className="header-container" >
          <div className="header-content" >
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
}