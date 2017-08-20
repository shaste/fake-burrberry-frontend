import React from 'react';
import styled from 'styled-components';
import Subtitle from './Subtitle';

import { Lg } from '../../Common/Breakpoints';

const Description = styled.div`
  border-top: 1px solid #c6c6c6;
  border-bottom: 1px solid #c6c6c6;

  @media all and (min-width: 48rem) {
    border-top: none;
    border-bottom: none;
  }
`;

const Content = styled.div`
  @media all and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Text = styled.div`
  padding-bottom: 2rem;
  font-family: "Lora";
  font-size: 0.875rem;
  line-height: 1.7142857143;

  & p,
  li {
    padding: 0;
    margin: 0;
  }

  & ul {
    padding: 0;
    margin: 0;
    margin-top: 1.5rem;
    list-style: none;
  }

  @media all and (min-width: 48rem) {
    padding-bottom: 1.5rem;
  }
`;

const Showcase = styled.div`
  @media all and (min-width: 62rem) {
    margin-top: 4rem;
    margin-bottom: 4rem;

    div:nth-child(1) {
      margin-top: 2rem;
    }

    div:nth-child(2) {
      margin-top: 6rem;
    }

    div:nth-child(3) {
      margin-top: 0;
    }
  }
}
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default () => (
  <Description>
    <div className="container">
      <Content>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Subtitle active>Description</Subtitle>
            <Text>
              <p>
                  A refined car coat crafted in protective cotton gabardine.
              </p>
              <p>
                  Invented by Thomas Burberry in 1879, cotton gabardine is a
                  tightly woven and breathable fabric that protects against wind
                  and rain.
              </p>
              <p>
                  Raglan sleeves and a concealed button closure complement the
                  clean tailored lines.
              </p>
              <p>
                  The piece is finished with a distinctive check undercollar.
              </p>
              <ul>
                <li>
                    Coat length: 98cm/38.6in. This is based on a size UK 48 as
                    proportions change slightly according to size.
                </li>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Text>
          </div>
          <Lg>
            <div className="col-lg-8">
              <Photo
                src={`${process.env.PUBLIC_URL}/images/Long-Cotton-Gabardine Car-Coat-5@2x.jpg`}
                alt="Button close-up"
              />
            </div>
          </Lg>
        </div>
      </Content>
      <Lg>
        <Showcase className="row">
          <div className="col-lg-4">
            <Photo
              src={`${process.env.PUBLIC_URL}/images/Long-Cotton-Gabardine Car-Coat-3@2x.jpg`}
              alt="Collar close-up"
            />
          </div>
          <div className="col-lg-4">
            <Photo
              src={`${process.env.PUBLIC_URL}/images/Long-Cotton-Gabardine Car-Coat-4@2x.jpg`}
              alt="Back view"
            />
          </div>
          <div className="col-lg-4">
            <Photo
              src={`${process.env.PUBLIC_URL}/images/Long-Cotton-Gabardine Car-Coat-3@2x.jpg`}
              alt="Collar close-up"
            />
          </div>
        </Showcase>
      </Lg>
    </div>
  </Description>
);
