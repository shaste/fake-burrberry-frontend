import React, { Component } from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const FiltersSt = styled.div`
  flex-direction: row;
  display: flex;

  white-space: nowrap;

  @media all and (min-width: 48rem) {
    justify-content: space-between;
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

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isOpened: false,
  };

  handleClick() {
    this.setState(() => ({
      isOpened: !this.state.isOpened,
    }));
  }
  render() {
    return (
      <FiltersSt>
        <div>
          <Title>Refine by</Title>
          <Filter title="Category" onClick={this.handleClick} parentOpened={this.state.isOpened}>
            <div>test 1</div>
          </Filter>
          <Filter title="Colour" onClick={this.handleClick} parentOpened={this.state.isOpened}>
            <div>test 2</div>
          </Filter>
          <Filter title="Size" onClick={this.handleClick} parentOpened={this.state.isOpened}>
            <div>test test</div>
          </Filter>
        </div>
        <Filter title="Sort by price" onClick={this.handleClick} parentOpened={this.state.isOpened}>
          <div>test 2</div>
        </Filter>
      </FiltersSt>
    );
  }
}

export default Filters;
