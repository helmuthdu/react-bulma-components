import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';
import { ShowContext } from '../context';

export const NavbarBurger = ({ style, className, ...allProps }) => {
  const props = modifiers.clean(allProps);
  return (
    <ShowContext.Consumer>
      {active => (
        <Element
          role="button"
          tabIndex="0"
          style={{ outline: 'none', ...style }}
          className={cn('navbar-burger', modifiers.getClassName(allProps), className, {
            'is-active': active
          })}
          {...props}
        >
          <span />
          <span />
          <span />
        </Element>
      )}
    </ShowContext.Consumer>
  );
};

NavbarBurger.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func
};

NavbarBurger.defaultProps = {
  ...modifiers.defaultProps,
  onClick: () => {}
};
