import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Common/SectionTitle';

const RelevantLinks = styled.section`
  display: block;
  padding: 0;

  @media all and (min-width: 48rem) {
    display: none;
  }
`;
const LinksContent = styled.div`
  margin-top: 0;
  padding-bottom: 3rem;
`;
const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-family: "Lora";
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.2142857143;
  text-decoration: none;
  color: #171717;
`;

export default () => (
  <RelevantLinks>
    <SectionTitle>More for you</SectionTitle>
    <LinksContent>
      <Link href="">Men’s Black Trench Coats</Link>
      <Link href="">Men’s Short Trench Coats</Link>
      <Link href="">Men’s Long Trench Coats</Link>
    </LinksContent>
  </RelevantLinks>
);
