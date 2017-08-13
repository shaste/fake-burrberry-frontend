import React from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const RecommendProduct = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #171717;
`;
const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  font-family: "Lora";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875;
  margin: 0.5rem 0;

  @media all and (min-width: 62rem) {
    margin: 1rem 0 0.5rem 0;
    font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  	font-size: 0.75rem;
  	font-weight: 600;
  	line-height: 1.1666666667;
  	color: #171717;
  }
`;

const Price = styled.h4`
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.1875;
  color: #999999;
  margin: 0;

  @media all and (min-width: 62rem) {
	  color: #171717;
  }
`;

export default function(props) {
  return (
    <RecommendProduct href={props.link}>
      <Photo alt={props.title} src={props.img} />
      <Title>
        {props.title}
      </Title>
      <Price>
        <FormattedNumber
          style="currency"
          currency={props.currency}
          currencyStyle="code"
          minimumFractionDigits="0"
          value={props.price}
        />
      </Price>
    </RecommendProduct>
  );
}
