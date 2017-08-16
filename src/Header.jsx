import React from 'react';
import styled from 'styled-components';
import logo from './assets/logo.svg';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #c6c6c6;

  @media all and (min-width: 48rem) {
    padding: 1.5rem 0;
  }

  @media all and (min-width: 62rem) {
    padding: 2rem 0;
    border: none;
  }
`;

const Logo = styled.img`
  display: block;

  @media all and (min-width: 62rem) {
    height: 1rem;
    width: auto;
  }
`;

export default () => (
  <Header>
    <a href="">
      <Logo src={logo} alt="" />
    </a>
  </Header>
);
