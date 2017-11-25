import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LikeStyled = styled.button`
  margin-left: 1rem;
  padding: 0;
  background-color: transparent;
  border: none;
  font-size: 0;
`;

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <LikeStyled
        onClick={this.handleClick}
        style={{ fill: this.state.toggle ? 'none' : '#171717' }}
      >
        {this.props.title}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15">
          <defs>
            <path
              id="a"
              d="M7.001 14L1.2 7.749c-1.634-1.806-1.592-4.695.083-6.455
              1.571-1.647 4.064-1.738 5.718-.18 1.676-1.558
              4.19-1.467 5.76.225 1.634 1.76 1.655 4.627.042 6.41L7.001 14z"
            />
          </defs>
          <use
            fill={this.props.fill}
            fillRule="nonzero"
            stroke="#171717"
            transform="translate(1 1)"
            xlinkHref="#a"
          />
        </svg>;
      </LikeStyled>
    );
  }
}

Like.propTypes = {
  title: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Like;
