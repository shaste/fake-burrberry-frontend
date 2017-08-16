import styled from 'styled-components';
import triangle from '../assets/triangle.svg';

export default styled.h2`
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1875;
  position: relative;
  padding: 2rem 0;
  margin: 0;
  line-height: 1.25;
  text-transform: uppercase;

  &::after {
    position: absolute;
    right: 0;
    left: auto;
    width: 10px;
    height: 20px;
    background-image: url(${triangle});
    background-repeat: no-repeat;
    background-position: center right;
    content: "";

    ${props => (props.active ? 'transform: rotate(180deg)' : '')};
  }

  @media all and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1rem;

    &::after {
      display: none;
    }

  @media all and (min-width: 62rem) {
    padding-top: 0;
  }
  }
`;
