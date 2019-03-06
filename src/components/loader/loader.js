import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Loader = ({ overlay, onClick, className, ...props }) => (
  <Element
    {...props}
    className={cn('loader', className, {
      'is-overlay': overlay
    })}
  >
    <div className="loader-background" onClick={onClick} />
    <div className="loader-icon" />
  </Element>
);

Loader.propTypes = {
  ...modifiers.propTypes,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Loader.defaultProps = {
  ...modifiers.defaultProps,
  overlay: false,
  renderAs: 'div'
};
