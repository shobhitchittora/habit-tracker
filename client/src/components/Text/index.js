import React from 'react';
import "./Text.css";
import PropTypes from 'prop-types';

function Text({ component, children }) {
  if (!component) {
    component = 'p';
  }

  return React.createElement(component, { className: 'Text-container' }, children);
}

Text.propTypes = {
  component: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'span']),
  children: PropTypes.oneOf([PropTypes.string, PropTypes.node])
}

export default Text;