import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarContainer = ({ className, children, position, ...props }) => (
  <Element
    {...props}
    className={cn(
      {
        [`navbar-${position}`]: position
      },
      className
    )}
  >
    {children}
  </Element>
);

NavbarContainer.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  position: PropTypes.oneOf(['start', 'end'])
};

NavbarContainer.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  position: 'start'
};
