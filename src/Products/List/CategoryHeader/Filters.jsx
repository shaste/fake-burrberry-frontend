import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Filter from './Filter';

const FiltersStyled = styled.div`
  flex-direction: row;
  display: flex;
  white-space: nowrap;

  @media all and (min-width: 36rem) {
    overflow: visible;
  }
`;

function Filters(props) {
  return (
    <FiltersStyled>
      <Filter title="Category" blabla={props.blabla} parentOpened={props.parentOpened}>
        <div>
          Content content content content content content content<br />
          content content content content content content content<br />
          content content content content content content content<br />
          content content content content content content content<br />
          content content content content content content content<br />
          content content content content content content content content
        </div>
      </Filter>
      <Filter title="Colour" blabla={props.blabla} parentOpened={props.parentOpened}>
        <div>test 2</div>
      </Filter>
      <Filter title="Size" blabla={props.blabla} parentOpened={props.parentOpened}>
        <div>test test</div>
      </Filter>

      <Filter
        title="Sort by price"
        blabla={props.blabla}
        parentOpened={props.parentOpened}
      >
        <div>test 2</div>
      </Filter>
    </FiltersStyled>
  );
}

Filters.propTypes = {
  parentOpened: PropTypes.bool.isRequired,
  blabla: PropTypes.func.isRequired,
};

export default Filters;
