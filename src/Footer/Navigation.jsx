import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  display: none;

  @media all and (min-width: 48rem) {
    display: block;
    padding-top: 2rem;
    padding-bottom: 1.25rem;
  }

  @media all and (min-width: 62rem) {
    padding-top: 4rem;
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

const Link = styled.a`
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
export default () => (
  <Navigation>
    <div className="row">
      <div className="col-md-3">
        <nav>
          <Title>CUSTOMER SERVICE</Title>
          <Link href="">Contact Us</Link>
          <Link href="">Payment</Link>
          <Link href="">Shipping</Link>
          <Link href="">Returns</Link>
          <Link href="">Faqs</Link>
          <Link href="">Live Chat</Link>
          <Link href="">The Burberry App</Link>
          <Link href="">Store Locator</Link>
        </nav>
      </div>
      <div className="col-md-3">
        <nav>
          <Title>OUR COMPANY</Title>
          <Link href="">Our History</Link>
          <Link href="">Burberry Group Plc</Link>
          <Link href="">Careers</Link>
          <Link href="">Corporate Responsibility</Link>
          <Link href="">Site map</Link>
        </nav>
      </div>
      <div className="col-md-3">
        <nav>
          <Title>LEGAL & COOKIES</Title>
          <Link href="">Terms & Conditions</Link>
          <Link href="">Privacy Policy</Link>
          <Link href="">Cookie Policy</Link>
          <Link href="">Accessibility Statement</Link>
          <Link href="">Japan Only - SCTL Indications</Link>
        </nav>
      </div>
    </div>
  </Navigation>
);
