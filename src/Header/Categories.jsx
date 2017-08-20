import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const Tab = styled(NavLink)`
  display: inline-block;
  padding: 1rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: #999999;
  border-bottom: 1px solid transparent;

  &.active {
    color: #171717;
    border-bottom-color: #171717;
  }
`;

export default () =>
  (<Nav>
    <Tab to="/women">Women</Tab>
    <Tab to="/men">Men</Tab>
    <Tab to="/children">Children</Tab>
    <Tab to="/beauty">Beauty</Tab>
    <Tab to="/experience">Experience</Tab>
  </Nav>);
