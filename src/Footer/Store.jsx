import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Photo = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #171717;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;

export default () =>
  (<div>
    <Photo
      src="http://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_ML_3X4$&hei=261&wid=400"
      alt="Inside the store"
    />
    <LinkStyled to="">Find a store</LinkStyled>
  </div>);
