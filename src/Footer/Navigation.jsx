import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Lg } from '../Common/Breakpoints';
import Store from './Store';

const Navigation = styled.div`
  display: none;

  @media all and (min-width: 48rem) {
    display: block;
    padding-top: 2rem;
    padding-bottom: 1.25rem;
  }

  @media all and (min-width: 62rem) {
    padding-top: 4rem;
    padding-bottom: 2.25rem;
  }
`;

const Title = styled.h4`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  line-height: 1.1666666667;
  text-transform: uppercase;
  color: #171717;
`;

const LinkStyled = styled(Link)`
  display: block;
  margin: 0;
  padding-bottom: 0.75rem;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  line-height: 1.3333333333;
  text-decoration: none;
  color: #999999;
`;

export default () =>
  (<Navigation>
    <div className="row">
      <div className="col-md-3">
        <nav>
          <Title>CUSTOMER SERVICE</Title>
          <LinkStyled to="">Contact Us</LinkStyled>
          <LinkStyled to="">Payment</LinkStyled>
          <LinkStyled to="">Shipping</LinkStyled>
          <LinkStyled to="">Returns</LinkStyled>
          <LinkStyled to="">Faqs</LinkStyled>
          <LinkStyled to="">Live Chat</LinkStyled>
          <LinkStyled to="">The Burberry App</LinkStyled>
          <LinkStyled to="">Store Locator</LinkStyled>
        </nav>
      </div>
      <div className="col-md-3">
        <nav>
          <Title>OUR COMPANY</Title>
          <LinkStyled to="">Our History</LinkStyled>
          <LinkStyled to="">Burberry Group Plc</LinkStyled>
          <LinkStyled to="">Careers</LinkStyled>
          <LinkStyled to="">Corporate Responsibility</LinkStyled>
          <LinkStyled to="">Site map</LinkStyled>
        </nav>
      </div>
      <div className="col-md-3">
        <nav>
          <Title>LEGAL & COOKIES</Title>
          <LinkStyled to="">Terms & Conditions</LinkStyled>
          <LinkStyled to="">Privacy Policy</LinkStyled>
          <LinkStyled to="">Cookie Policy</LinkStyled>
          <LinkStyled to="">Accessibility Statement</LinkStyled>
          <LinkStyled to="">Japan Only - SCTL Indications</LinkStyled>
        </nav>
      </div>
      <div className="col-md-3">
        <Lg>
          <Store />
        </Lg>
      </div>
    </div>
  </Navigation>);
