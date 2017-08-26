import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';

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

export default () =>
  (<Filters>
    <div>
      <Title>Refine by</Title>
      <Filter title="Category" />
      <Filter title="Colour" />
      <Filter title="Size" />
    </div>
    <Filter title="Sort by price" />
  </Filters>);
