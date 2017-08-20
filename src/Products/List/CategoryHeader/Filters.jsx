import React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/arrow.svg';

const Filters = styled.div`
  flex-direction: row;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;

  @media all and (min-width: 48rem) {
    justify-content: space-between;
    overflow-x: hidden;
  }
`;

const Title = styled.p`
  display: inline-block;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  color: #171717;

  @media all and (min-width: 48rem) {
    display: none;
  }
`;

const Filter = styled.button`
  padding: 1.5rem 0;
  margin-right: 1rem;
  background-color: transparent;
  border: none;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  color: #171717;

  &::after {
    content: "";
    display: inline-block;
    margin-left: 0.5rem;
    width: 12px;
    height: 6px;
    background-size: contain;
    background-image: url(${arrow});
    background-repeat: no-repeat;

    ${props => (props.active ? 'transform: rotate(180deg)' : '')};
  }

  @media all and (min-width: 48rem) {
    margin-right: 3rem;
  }
`;

const Sort = Filter.extend`
  margin-right: 0;

  @media all and (min-width: 48rem) {
    margin-right: 0;
  }
`;

export default () =>
  (<Filters>
    <div>
      <Title>Refine by</Title>
      <Filter>Category</Filter>
      <Filter>Colour</Filter>
      <Filter>Size</Filter>
    </div>
    <Sort>Sort by price</Sort>
  </Filters>);
