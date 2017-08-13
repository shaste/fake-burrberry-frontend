import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

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

const Price = styled.h2`
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

export default function(props) {
  return (
    <Content>
      <Price>
        <FormattedNumber
          style="currency"
          currency={props.currency}
          currencyStyle="code"
          minimumFractionDigits="0"
          value={props.price}
        />
      </Price>
      <VendorCode>
        Item {props.id}
      </VendorCode>
    </Content>
  );
}
