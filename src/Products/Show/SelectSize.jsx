import React from 'react';
import styled from 'styled-components';
import Button from '../../Common/Button';
import ButtonSmall from '../../Common/ButtonSmall';
import ButtonText from './ButtonText';

import { XsMd, Lg } from '../../Common/Breakpoints';

const Size = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.3333333333;
`;

const SelectedSize = styled.div`
  @media all and (min-width: 62rem) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

export default () => (
  <div>
    <XsMd>
      <Button type="button" primary>
          Select a size
      </Button>
    </XsMd>
    <Lg>
      <SelectedSize>
        <Size>
            Size: <b>XL</b>
        </Size>
        <ButtonText type="button">Need size help?</ButtonText>
      </SelectedSize>
      <ButtonSmall>S</ButtonSmall>
      <ButtonSmall>M</ButtonSmall>
      <ButtonSmall>L</ButtonSmall>
      <ButtonSmall selected>XL</ButtonSmall>
    </Lg>
  </div>
);
