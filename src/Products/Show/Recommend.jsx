import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../Common/SectionTitle';
import Card from '../Card';

const Recommend = styled.section`
  padding: 3rem 0 1rem 0;

  @media all and (min-width: 48rem) {
    padding: 3rem 0 2rem 0;
  }

  @media all and (min-width: 62rem) {
    padding: 4rem 0 2rem 0;
  }
`;

export default () => (
  <Recommend>
    <SectionTitle>We recommend</SectionTitle>
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <Card
          section="men"
          subsection="clothing"
          id="the-westminster-long-heritage-trench-coat"
          label="Relaxed fit"
          img="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
          title="The Westminster – Long Heritage Trench Coat"
          colorAmount={3}
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          section="men"
          subsection="clothing"
          id="the-westminster-long-heritage-trench-coat"
          label="Toilered fit"
          img="https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
          title="The Kensington – Mid-Length Heritage Trench Coat"
          colorAmount={4}
          price={110000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          section="men"
          subsection="clothing"
          id="the-westminster-long-heritage-trench-coat"
          label="Slim fit"
          img="https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
          title="The Sandringham – Mid-length Heritage Trench Coat"
          colorAmount={3}
          price={100000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-md-3">
        <Card
          section="men"
          subsection="clothing"
          id="the-westminster-long-heritage-trench-coat"
          label="Relaxed fit"
          img="https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
          title="The Westminster – Long Heritage Trench Coat"
          colorAmount={1}
          price={120000}
          currency="RUB"
        />
      </div>
    </div>
  </Recommend>
);
