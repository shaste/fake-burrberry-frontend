import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

export const Lg = ({ children }) =>
  (<Responsive minWidth={992}>
    {children}
  </Responsive>);

export const Md = ({ children }) =>
  (<Responsive minWidth={768} maxWidth={991}>
    {children}
  </Responsive>);

export const Xs = ({ children }) =>
  (<Responsive minWidth={0}>
    {children}
  </Responsive>);

export const XsMd = ({ children }) =>
  (<Responsive minWidth={0} maxWidth={991}>
    {children}
  </Responsive>);

export const FromMd = ({ children }) =>
  (<Responsive minWidth={768}>
    {children}
  </Responsive>);

Lg.propTypes = {
  children: PropTypes.node.isRequired,
};

Md.propTypes = {
  children: PropTypes.node.isRequired,
};

Xs.propTypes = {
  children: PropTypes.node.isRequired,
};

XsMd.propTypes = {
  children: PropTypes.node.isRequired,
};

FromMd.propTypes = {
  children: PropTypes.node.isRequired,
};
