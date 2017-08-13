import React from "react";
import styled from "styled-components";
import Price from "./Price";
import ColorButton from "./ColorButton";
import Divider from "../Common/Divider";
import Button from "../Common/Button";
import ButtonText from "./ButtonText";
import SelectSize from "./SelectSize";

import { XsMd, Lg } from "../Common/Breakpoints";

const Details = styled.section`
  padding-top: 1rem;
  padding-bottom: 3rem;

  @media all and (min-width: 48rem) {
    padding: 0;
  }
`;

const Color = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.75rem;
  line-height: 1.3333333333;
`;

const ChangeColorButtons = styled.div`
  display: flex;
  flex-flow: row;
  margin-bottom: 2rem;

  @media all and (min-width: 62rem) {
    margin-bottom: 1.5rem;
  }
`;

const DetailsDivider = Divider.extend`
  @media all and (min-width: 48rem) {
    display: block;
    margin-bottom: 2rem;
  }

  @media all and (min-width: 62rem) {
    display: none;
  }
`;

const DeliveryInfo = styled.div`
  display: none;

  @media all and (min-width: 62rem) {
    display: block;
  }
`;

const Title = styled.h3`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 700;
  line-height: 1.1666666667;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.3333333333;
`;

export default () => {
  return (
    <Details>
      <Price price={110000} currency="RUB" id={39428531} />
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <Color>
            Colour: <b>Honey</b>
          </Color>
          <ChangeColorButtons>
            <ColorButton color="#232122" type="button">
              Choose black colour
            </ColorButton>
            <ColorButton color="#cfa880" type="button" active>
              Choose honey colour
            </ColorButton>
          </ChangeColorButtons>
          <DetailsDivider />
        </div>
        <div className="col-xs-12 col-lg-6">
          <SelectSize />
        </div>
      </div>
      <div className="row">
        <Lg>
          <div className="col-lg-6">
            <Button type="button" primary>Add to bag</Button>
          </div>
        </Lg>
        <div className="col-xs-12 col-lg-6">
          <Button type="button">Find in store</Button>
        </div>
        <XsMd>
          <div className="col-xs-12 col-lg-6">
            <ButtonText type="button">Need size help?</ButtonText>
          </div>
        </XsMd>
      </div>
      <DeliveryInfo>
        <Title>Free Next Day Delivery</Title>
        <Text>
          Order before 7pm Monday to Thursday for delivery the next day
        </Text>
      </DeliveryInfo>
    </Details>
  );
};
