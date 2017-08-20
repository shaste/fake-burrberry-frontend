import styled from 'styled-components';

export default styled.button`
  margin-right: 1rem;
  width: 40px;
  height: 40px;
  font-size: 0;
  background: ${props => props.color};
  border-radius: 100px;
  border: ${props => (props.active ? 'solid 1px #232122' : 'none')};
`;
