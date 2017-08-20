import React from 'react';
import styled from 'styled-components';

const ShowMore = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
  text-align: center;

  @media all and (min-width: 48rem) {
    padding-top: 1rem;
    padding-bottom: 5rem;
  }
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Lora";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875;

  @media all and (min-width: 48rem) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.33;
  color: #171717;
  background-color: transparent;
  border-radius: 2px;
  border: 1px solid #171717;
`;

export default () =>
  (<ShowMore>
    <Title>Showing 8 of 17</Title>
    <Button type="button">View 9 more</Button>
  </ShowMore>);
