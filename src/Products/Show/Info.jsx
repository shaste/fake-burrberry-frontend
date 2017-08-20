import React from 'react';
import styled from 'styled-components';
import Gallery from './Gallery';
import Details from './Details';
import Title from './Title';

import { XsMd, Lg } from '../../Common/Breakpoints';

const Info = styled.section`
  @media all and (min-width: 62rem) {
    background-color: #d4bdad;
  }
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default () => (
  <Info>
    <div className="container">
      <XsMd>
        <Title>Long Cotton Gabardine Car Coat</Title>
      </XsMd>
      <div className="row middle-lg">
        <div className="col-xs-12 col-md-7 col-lg-6">
          <XsMd>
            <Gallery />
          </XsMd>
          <Lg>
            <Photo
              src="/images/Long-Cotton-Gabardine Car-Coat-1@2x.jpg"
              alt="Front view"
            />
          </Lg>
        </div>
        <div className="col-xs-12 col-md-5 col-lg-6">
          <Lg>
            <Title>Long Cotton Gabardine Car Coat</Title>
          </Lg>
          <Details />
        </div>
      </div>
    </div>
  </Info>
);
