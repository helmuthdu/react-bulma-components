import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

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
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['start', 'end']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

NavbarContainer.defaultProps = {
  ...modifiers.defaultProps,
  position: 'start',
  renderAs: 'div'
};
