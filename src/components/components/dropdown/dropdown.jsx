import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Button } from '../../elements/button';
import { Icon } from '../../elements/icon';
import { DropdownDivider, DropdownItem } from './components';

const colors = Object.values(CONSTANTS.COLORS);

export const Dropdown = ({ className, children, value, color, right, up, label, hoverable, onChange, ...allProps }) => {
  useEffect(() => {
    document.addEventListener('click', close);

    return () => {
      document.removeEventListener('click', close);
    };
  });

  const [open, setOpen] = useState(false);

  const props = modifiers.clean(allProps);

  let current = label;
  let htmlElement;

  const close = evt => {
    if (hoverable || (evt && htmlElement.contains(evt.target))) {
      return;
    }
    setOpen(false);
  };

  const toggle = evt => {
    if (evt) {
      evt.preventDefault();
    }
    if (hoverable) {
      return;
    }
    setOpen(!open);
  };

  const select = value => () => {
    if (onChange) {
      onChange(value);
    }
    close();
  };

  const childrenArray = React.Children.map(children, (child, i) => {
    if (child.type === DropdownItem && ((i === 0 && !label) || child.props.value === value)) {
      current = child.props.children;
    }
    return React.cloneElement(
      child,
      child.type === DropdownItem
        ? {
            active: child.props.value === value,
            onClick: select(child.props.value)
          }
        : {}
    );
  });

  return (
    <div
      {...props}
      ref={node => {
        htmlElement = node;
      }}
      data-testid="dropdown-container"
      className={cn('dropdown', modifiers.getClassName(allProps), className, {
        'is-active': open,
        'is-hoverable': hoverable,
        'is-right': right,
        'is-up': up
      })}
    >
      <div data-testid="dropdown-trigger" role="presentation" onClick={toggle}>
        <Button color={color}>
          <span>{current}</span>
          <Icon icon="chevron-down" />
        </Button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">{childrenArray}</div>
      </div>
    </div>
  );
};

Dropdown.Divider = DropdownDivider;
Dropdown.Item = DropdownItem;

Dropdown.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  hoverable: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  right: PropTypes.bool,
  style: PropTypes.object,
  up: PropTypes.bool,
  value: PropTypes.any
};

Dropdown.defaultProps = {
  ...modifiers.defaultProps,
  children: [],
  label: '',
  onChange: () => {},
  value: null
};
