import React from 'react';
import styled from 'styled-components';
import Subtitle from './Subtitle';

const Delivery = styled.div`
  border-bottom: 1px solid #c6c6c6;

  @media all and (min-width: 48rem) {
    border-bottom: none;
  }
`;

const Photo = styled.img`
  display: none;

  @media all and (min-width: 48rem) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const SubtitleDelivery = Subtitle.extend`
  @media all and (min-width: 48rem) {
    padding: 0 0 1rem 0;
  }
`;

const Content = styled.div`
  display: none;

  @media all and (min-width: 48rem) {
    display: block;
    padding: 0;

    p:last-child {
      padding-bottom: 0;
    }
  }
`;

const ContentTitle = styled.h3`
  margin: 0;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  line-height: 1.1666666667;
`;

const Text = styled.p`
  margin: 0;
  padding-bottom: 1.5rem;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.3333333333;
`;

export default () => (
  <Delivery>
    <div className="container">
      <div className="row middle-lg">
        <div className="col-md-7">
          <Photo src="images/gift-package@2x.jpg" alt="Gift package" />
        </div>
        <div className="col-xs-12 col-md-5 col-lg-offset-1 col-lg-4">
          <SubtitleDelivery>Delivery</SubtitleDelivery>
          <Content>
            <ContentTitle>Free Next Day Delivery</ContentTitle>
            <Text>
                Order before 7pm Monday to Thursday for delivery the next day
            </Text>
            <ContentTitle>Collect-in-Store</ContentTitle>
            <Text>
                Order online today and pick up your items in store as early as
                tomorrow
            </Text>
            <ContentTitle>Free Returns</ContentTitle>
            <Text>Enjoy free returns on your order</Text>
            <ContentTitle>Free Gift Packaging</ContentTitle>
            <Text>
                Discover our gift packaging, a gold lined box tied with a
                coloured ribbon
            </Text>
          </Content>
        </div>
      </div>
    </div>
  </Delivery>
);
