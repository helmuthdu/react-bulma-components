import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';

export const Footer = ({ children, className, ...props }) => (
  <Element {...props} className={cn('footer', className)}>
    {children}
  </Element>
);

Footer.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Footer.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
