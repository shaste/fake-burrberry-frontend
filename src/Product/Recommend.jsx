import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../Common/SectionTitle';
import RecommendProduct from './RecommendProduct';

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
      <div className="col-xs-6 col-sm-3">
        <RecommendProduct
          link=""
          img="images/we-recomended1.jpg"
          title="Emroided Hooded"
          price={27000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-sm-3">
        <RecommendProduct
          link=""
          img="images/we-recomended2.jpg"
          title="Relaxed Fit Stretch Jeans"
          price={22500}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-sm-3">
        <RecommendProduct
          link=""
          img="images/we-recomended3.jpg"
          title="Leather and House Check"
          price={120000}
          currency="RUB"
        />
      </div>
      <div className="col-xs-6 col-sm-3">
        <RecommendProduct
          link=""
          img="images/we-recomended4.jpg"
          title="Leather Wingtip Check"
          price={46000}
          currency="RUB"
        />
      </div>
    </div>
  </Recommend>
);
