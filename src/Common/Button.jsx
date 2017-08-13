import styled from "styled-components";

export default styled.button`
  box-sizing: border-box;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  border: solid 1px #171717;

  background-color: ${props => (props.primary ? "#171717" : "Transparent")};
  color: ${props => (props.primary ? "#ffffff" : "#171717")};
`;
