import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Menu = styled.aside`
  width: 274px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  transform: ${props => (props.menuOpened ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 250ms ease-in;
`;

const Text = styled.div`
  position: absolute;
  left: 0;
`;

function MobMenu(props) {
  return (
    <Menu menuOpened={props.menuOpened}>
      <Text>Текст в меню</Text>
    </Menu>
  );
}

MobMenu.PropTypes = {
  menuOpened: PropTypes.bool.isRequired,
};

export default MobMenu;
