import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const NavbarItem = ({ className, active, children, dropdown, dropdownUp, hoverable, renderAs, ...props }) => {
  let as = renderAs;
  if (dropdown && renderAs === 'a') {
    as = 'span';
  }
  return (
    <Element
      {...props}
      renderAs={as}
      className={cn('navbar-item', className, {
        'has-dropdown': dropdown,
        'has-dropdown-up': dropdownUp,
        'is-active': active,
        'is-hoverable': hoverable
      })}
    >
      {children}
    </Element>
  );
};

NavbarItem.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dropdown: PropTypes.bool,
  dropdownUp: PropTypes.bool,
  hoverable: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

NavbarItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  dropdown: false,
  dropdownUp: false,
  hoverable: false,
  renderAs: 'a'
};
