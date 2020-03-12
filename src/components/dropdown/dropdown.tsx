import clsx from 'clsx';
import * as React from 'react';
import { RefObject } from 'react';
import { Colors } from '../../constants';
import { Button } from '../../elements/button';
import { Icon } from '../../elements/icon';
import modifiers, { ElementModifier } from '../../modifiers';
import { DropdownItem } from './dropdown-item';

const { useEffect, useState } = React;

type DropdownProps = ElementModifier & {
  color?: Exclude<Colors, 'light'>;
  hoverable?: boolean;
  label?: React.ReactNode;
  light?: boolean;
  onChange?: (...args: any[]) => void;
  right?: boolean;
  up?: boolean;
  value?: any;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'color' | 'onChange' | 'unselectable'>;

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, children, value, color, light, right, up, label, hoverable, onChange, ...props }, ref) => {
    useEffect(() => {
      document.addEventListener('click', close);
      return () => {
        document.removeEventListener('click', close);
      };
    });

    if (!ref) {
      ref = React.createRef<HTMLDivElement>();
    }

    const [open, setOpen] = useState(false);

    const close = (evt?: React.MouseEvent | any) => {
      if (hoverable || (evt && ((ref as RefObject<HTMLDivElement>).current as HTMLDivElement).contains(evt.target))) {
        return;
      }
      setOpen(false);
    };

    const toggle = (evt?: React.MouseEvent) => {
      if (evt) {
        evt.preventDefault();
      }
      if (hoverable) {
        return;
      }
      setOpen(!open);
    };

    const select = (value: any) => () => {
      if (onChange) {
        onChange(value);
      }

      if (close) {
        close();
      }
    };

    let current = label;
    const childrenArray = React.Children.map(children, (child: any, i) => {
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
        ref={ref}
        className={clsx('dropdown', className, modifiers.getClassName(props), {
          'is-active': open,
          'is-hoverable': hoverable,
          'is-right': right,
          'is-up': up
        })}
        {...modifiers.clean(props)}
      >
        <div role="presentation" onClick={toggle}>
          <Button color={color} light={light}>
            <span>{current}</span>
            <Icon icon="chevron-down" />
          </Button>
        </div>
        <div className="dropdown-menu" role="menu">
          <div className="dropdown-content">{childrenArray}</div>
        </div>
      </div>
    );
  }
);

Dropdown.defaultProps = {
  ...modifiers.defaultProps,
  children: [],
  label: '',
  onChange: () => {},
  value: null
};
