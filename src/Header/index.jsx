import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Xs, FromMd } from '../Common/Breakpoints';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import arrow from '../assets/arrow.svg';
import Categories from './Categories';

const HeaderSt = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.125rem 0;

  @media all and (min-width: 48rem) {
    padding: 1.5rem 0;
  }

  @media all and (min-width: 62rem) {
    padding: 2rem 0;
  }
`;

const Hamburger = styled.button`
  position: absolute;
  padding: 0;
  margin: 0;
  left: 0;
  background-image: url(${hamburger});
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 0.625rem;
  border: none;
  background-color: transparent;

  @media all and (min-width: 48rem) {
    display: none;
  }
`;

const CountrySelect = styled.button`
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  font-weight: 600;
  text-align: left;
  color: #999999;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &::after {
    content: "";
    display: inline-block;
    margin-left: 0.5rem;
    width: 12px;
    height: 6px;
    background-size: contain;
    background-image: url(${arrow});
    background-repeat: no-repeat;

    ${props => (props.active ? 'transform: rotate(180deg)' : '')};
  }
`;

const Logo = styled.img`
  display: block;
  height: 0.75rem;
  width: auto;

  @media all and (min-width: 48rem) {
    height: 1rem;
    width: auto;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      active: !state.active,
    }));
  }

  render() {
    return (
      <div className="container">
        <HeaderSt>
          <Xs>
            <Hamburger src={hamburger} />
          </Xs>
          <FromMd>
            <CountrySelect active={this.state.active} onClick={this.handleClick}>Shopping in: United Kingdom (£)</CountrySelect>
          </FromMd>
          <Link to="">
            <Logo src={logo} alt="" />
          </Link>
        </HeaderSt>
        <FromMd>
          <Categories />
        </FromMd>
      </div>
    );
  }
}

export default Header;
