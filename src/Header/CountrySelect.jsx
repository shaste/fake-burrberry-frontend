import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from '../assets/arrow.svg';

const Select = styled.select`
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  font-weight: 600;
  text-align: left;
  color: #999999;
  border: none;
  background-color: transparent;
  cursor: pointer;

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
`;

class CountrySelect extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'UK' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Select value={this.state.value} onChange={this.handleChange}>
        <option value="UK">Shopping in: United Kingdom (£)</option>
        <option value="RF">Shopping in: Russian Federation (₽)</option>
        <option value="USA">Shopping in: United States ($)</option>
      </Select>
    );
  }
}

export default CountrySelect;
