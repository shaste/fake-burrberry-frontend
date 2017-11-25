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
  color: ${props => (props.parentOpened && !props.active ? '#999999' : '#171717')};

  &::after {
    content: "";
    display: inline-block;
    margin-left: 0.5rem;
    width: 12px;
    height: 6px;
    background-size: contain;
    -webkit-mask: url(${arrow}) bottom no-repeat;
    background-color: ${props => (props.parentOpened && !props.active ? '#999999' : '#171717')};

    transform: ${props => (props.active ? 'rotate(180deg)' : '')};
  }

  @media all and (min-width: 48rem) {
    margin-right: 3rem;
  }
`;

const Content = styled.div`
  display: ${props => (props.active ? 'block' : 'none')};
  position: absolute;

  padding: 1rem 1.5rem;
  left: -1.5rem;
  top: 100%;
  z-index: 9999;
  background-color: #f3f3f3;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  color: #171717;
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  state = { isOpened: false };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  toggle(on) {
    if (on !== this.state.isOpened) {
      this.setState(
        prevState => ({ isOpened: !prevState.isOpened }),
        () => this.props.blabla(this.state.isOpened),
      );
    }
  }

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.toggle(false);
    }
  }

  render() {
    return (
      <FilterStyled>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Dropdown
            active={this.state.isOpened}
            parentOpened={this.props.parentOpened}
            onClick={this.toggle}
          >
            {this.props.title}
          </Dropdown>
          <Content active={this.state.isOpened}>
            {this.props.children}
          </Content>
        </div>
      </FilterStyled>
    );
  }
}

Filter.propTypes = {
  parentOpened: PropTypes.bool.isRequired,
  blabla: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Filter;
