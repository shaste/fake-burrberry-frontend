import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FormattedNumber, FormattedPlural } from 'react-intl';

import PropTypes from 'prop-types';
import Like from '../assets/Like';

const CardStyled = styled.div`
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
  margin: 0.5rem 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #171717;

  @media all and (min-width: 48rem) {
    font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #171717;
  }
`;

const Price = styled.h4`
  margin-top: 0;
  margin-bottom: 2rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  color: #171717;

  @media all and (min-width: 62rem) {
    color: #171717;
  }
`;

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLabel = styled.p`
  margin: 0;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
  color: #171717;
`;

const Colors = styled.h4`
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  text-align: left;
  color: #171717;
`;

const ColorsNumber = styled(Link)`
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #171717;
  background-color: transparent;
  border: none;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export default function Card(props) {
  return (
    <CardStyled>
      <LinkStyled to={`${props.to}`}>
        <Photo alt={props.title} src={props.img} />
      </LinkStyled>
      <Wrapper>
        <CardLabel>
          {props.label}
        </CardLabel>
        <Like title="Add to favorites" />
      </Wrapper>
      <LinkStyled to={`${props.to}`}>
        <Title>
          {props.title}
        </Title>
      </LinkStyled>
      <Colors>
        Avaliable in&nbsp;
        <ColorsNumber to={`${props.to}`}>
          {props.colorAmount}
          <FormattedPlural value={props.colorAmount} one=" colour" other=" colours" />
        </ColorsNumber>
      </Colors>
      <Price>
        <FormattedNumber
          style="currency" // eslint-disable-line
          currency={props.currency}
          currencyStyle="code"
          minimumFractionDigits="0"
          value={props.price}
        />
      </Price>
    </CardStyled>
  );
}

Card.propTypes = {
  to: PropTypes.string.isRequired,
  colorAmount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
