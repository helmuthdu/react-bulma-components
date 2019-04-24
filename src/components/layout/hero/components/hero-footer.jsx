import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const HeroFooter = ({ children, className, ...props }) => (
  <Element {...props} className={cn(className, 'hero-foot')}>
    {children}
  </Element>
);

HeroFooter.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

HeroFooter.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
