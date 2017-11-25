import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Filters from './Filters';

const CategoryHeaderStyled = styled.div`
  background-color: #f3f3f3;
  padding-top: 2rem;

  @media all and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-bottom: 1rem;
  font-family: "Lora";
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 2rem;
  color: #171717;
`;

const Text = styled.div`
  padding-bottom: 0.5rem;
  opacity: 0.87;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  line-height: 1.67;
  color: #171717;

  & p {
    padding: 0;
    margin: 0;
  }

  @media all and (min-width: 48rem) {
    padding-bottom: 1rem;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 0;
  margin-left: 0.5rem;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 0.75rem;
  color: #171717;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #171717;
`;

const LinkStyled = styled(Link)`
  color: #171717;
  text-decoration: none;
  border-bottom: 1px solid #171717;
`;

function CategoryHeader(props) {
  return (
    <CategoryHeaderStyled>
      <div className="container">
        <Title>Men’s Clothing</Title>
        <div className="row">
          <div className="col-xs-12 col-md-9 col-lg-7">
            <Text>
              <p>
                Explore our menswear collection for the season. Sculptural knitwear,{' '}
                <LinkStyled to="">sweatshirts</LinkStyled>, artist overalls and oversized cabans
                feature alongside our signature trench coat in both heritage.<Button>More</Button>
              </p>
            </Text>
          </div>
        </div>
        <Filters blabla={props.blabla} parentOpened={props.parentOpened} />
      </div>
    </CategoryHeaderStyled>
  );
}

CategoryHeader.propTypes = {
  parentOpened: PropTypes.bool.isRequired,
  blabla: PropTypes.func.isRequired,
};

export default CategoryHeader;
