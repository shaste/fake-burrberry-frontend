import styled from 'styled-components';

export default styled.h1`
  margin: 0;
  padding: 1rem 0;
  font-family: "Lora";
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.2;

  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
    line-height: 1.1666666667;
  }

  @media all and (min-width: 62rem) {
    padding: 0;
  }
`;
