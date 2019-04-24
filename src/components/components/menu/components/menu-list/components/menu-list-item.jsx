import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../../modifiers';
import { Element } from '../../../../../layout/element';
import { MenuList } from '../menu-list';

export const MenuListItem = ({ children, active, className, ...props }) => {
  if (
    typeof children !== 'string' &&
    React.Children.toArray(children).length === 1 &&
    React.Children.only(children).type === MenuList
  ) {
    const child = React.Children.only(children);
    return (
      <li>
        <Element className={cn(className, { 'is-active': active })} {...props}>
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: null })}
      </li>
    );
  }

  return (
    <li>
      <Element className={cn(className, { 'is-active': active })} {...props}>
        {children}
      </Element>
    </li>
  );
};

MenuListItem.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

MenuListItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'a'
};
