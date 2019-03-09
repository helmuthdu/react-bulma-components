import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const HeroBody = ({ children, className, ...props }) => (
  <Element {...props} className={cn(className, 'hero-body')}>
    {children}
  </Element>
);

HeroBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

HeroBody.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
