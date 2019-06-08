import cn from 'classnames';
import * as React from 'react';
import { Colors } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Button } from '../../elements/button';
import { Icon } from '../../elements/icon';
import { DropdownItem } from './dropdown-item';

const { useEffect, useState } = React;

type DropdownProps = ElementModifier & {
  color?: Colors;
  hoverable?: boolean;
  label?: React.ReactNode;
  onChange?: (...args: any[]) => void;
  right?: boolean;
  up?: boolean;
  value?: any;
} & Omit<React.ComponentProps<'div'>, 'color' | 'onChange' | 'unselectable'>;

export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  className,
  children,
  value,
  color,
  right,
  up,
  label,
  hoverable,
  onChange,
  testId,
  ...rest
}: DropdownProps) => {
  useEffect(() => {
    document.addEventListener('click', close);
    return () => {
      document.removeEventListener('click', close);
    };
  });

  const [open, setOpen] = useState(false);
  const props = modifiers.clean(rest);
  const htmlElement: React.RefObject<HTMLDivElement> = React.createRef();

  const close = (evt?: React.MouseEvent | any) => {
    if (hoverable || (evt && (htmlElement.current as HTMLDivElement).contains(evt.target))) {
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
      ref={htmlElement}
      data-testid={Array.isArray(testId) ? testId[1] : undefined}
      className={cn('dropdown', className, modifiers.getClassName(rest), {
        'is-active': open,
        'is-hoverable': hoverable,
        'is-right': right,
        'is-up': up
      })}
      {...props}
    >
      <div data-testid={(Array.isArray(testId) ? testId[0] : testId) || undefined} role="presentation" onClick={toggle}>
        <Button color={color}>
          <span>{current}</span>
          <Icon icon="chevron-down" />
        </Button>
      </div>
      <div data-testid={Array.isArray(testId) ? testId[2] : undefined} className="dropdown-menu" role="menu">
        <div className="dropdown-content">{childrenArray}</div>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  ...modifiers.defaultProps,
  children: [],
  label: '',
  onChange: () => {},
  value: null
};
