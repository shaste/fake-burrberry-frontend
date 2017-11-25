import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Xs, FromMd } from '../Common/Breakpoints';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';
import Categories from './Categories';
import CountrySelect from './CountrySelect';

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

const Logo = styled.img`
  display: block;
  height: 0.75rem;
  width: auto;

  @media all and (min-width: 48rem) {
    height: 1rem;
    width: auto;
  }
`;

function Header(props) {
  return (
    <div className="container">
      <HeaderSt>
        <Xs>
          <Hamburger src={hamburger} onClick={props.openMenu} />
        </Xs>
        <FromMd>
          <CountrySelect />
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

Header.PropTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Header;
