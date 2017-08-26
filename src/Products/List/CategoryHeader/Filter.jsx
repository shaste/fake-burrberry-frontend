/* eslint-disable*/
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import arrow from '../../../assets/arrow.svg';

const FilterStyled = styled.div`
  position: relative;
  display: inline-block;
`;

const Dropdown = styled.button`
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

    ${props => (props.open ? 'transform: rotate(180deg)' : '')};
  }

  @media all and (min-width: 48rem) {
    margin-right: 3rem;
  }
`;

const Content = styled.div`
  display: none;
  position: absolute;
  width: auto;
  padding: 1.5rem 1rem;
  left: 0;
  top: 100%;
  background-color: red;

  &.is-active {
    display: block;
  }
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({ active: true });
    document.addEventListener('click', this.hide);
  }

  hide() {
    this.setState({ active: false });
    document.removeEventListener('click', this.hide);
  }

  render() {
    return (
      <FilterStyled>
        <Dropdown
          active={this.state.active}
          open={this.props.open}
          onClick={() => {
            this.props.onClick();
            this.show();
          }}
        >
          {this.props.title}
        </Dropdown>
        <Content className={this.state.active ? 'is-active' : null}>bla bla</Content>
      </FilterStyled>
    );
  }
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
