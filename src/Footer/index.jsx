import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Footer = styled.footer`
  padding: 0;
  background-color: #f3f3f3;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 0;

  @media all and (min-width: 48rem) {
    display: flex;
    flex-direction: row;
    padding-top: 0;
    padding-bottom: 2rem;
  }

  @media all and (min-width: 62rem) {
    padding-bottom: 3rem;
  }
`;

const Button = styled.button`
  padding: 0;
  margin-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  text-align: left;
  color: #999999;
  border: none;
  background-color: transparent;

  @media all and (min-width: 48rem) {
    margin: 0 1.5rem 0 0;
  }
`;

const Select = styled.span`color: #171717;`;

const Help = styled.div`
  padding-top: 0;
  padding-bottom: 2rem;

  @media all and (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.h5`
  margin: 0;
  padding: 0.5rem 0 1rem 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875;
  color: #171717;
  display: block;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  display: block;
  font-family: "Lora";
  font-size: 0.875rem;
  font-style: italic;
  line-height: 17px;
  text-align: center;
  text-decoration: none;
  color: #171717;
`;

export default () =>
  (<Footer>
    <div className="container">
      <Navigation />
      <Settings>
        <Button>
          Shipping country: <Select>Russian Federation</Select>
        </Button>
        <Button>
          Language: <Select>English</Select>
        </Button>
      </Settings>
      <Help>
        <Title>Need help?</Title>
        <LinkStyled to="">Find out more and contact us</LinkStyled>
      </Help>
    </div>
  </Footer>);
