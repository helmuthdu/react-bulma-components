import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';
import { ShowContext } from '../context';

export const NavbarMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <ShowContext.Consumer>
    {active => (
      <Element
        {...props}
        ref={ref}
        className={cn('navbar-menu', className, {
          'is-active': active
        })}
      >
        {children}
      </Element>
    )}
  </ShowContext.Consumer>
));

NavbarMenu.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

NavbarMenu.defaultProps = {
  ...modifiers.defaultProps,
  children: null
};
