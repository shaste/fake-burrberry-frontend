import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import PropTypes from 'prop-types';

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media all and (min-width: 62rem) {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;

const PriceStyled = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.19;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875;
`;

const VendorCode = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.3333333333;

  @media all and (min-width: 62rem) {
    display: none;
  }
`;

export default function Price(props) {
  return (
    <Content>
      <PriceStyled>
        <FormattedNumber
          style="currency" // eslint-disable-line
          currency={props.currency}
          currencyStyle="code"
          minimumFractionDigits={0}
          value={props.price}
        />
      </PriceStyled>
      <VendorCode>
        Item {props.id}
      </VendorCode>
    </Content>
  );
}

Price.propTypes = {
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
