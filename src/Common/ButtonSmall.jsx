import styled from "styled-components";

export default styled.button`
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.3333333333;
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  border: solid 1px #171717;

  font-weight: ${props => (props.selected ? "700" : "")};
`;
