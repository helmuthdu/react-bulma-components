import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type LoaderProps = ElementModifier & {
  onClick?: (...args: any[]) => any;
};

export const Loader: React.FunctionComponent<LoaderProps> = ({
  overlay,
  onClick,
  className,
  ...props
}: LoaderProps) => (
  <Element
    {...props}
    className={clsx('loader', className, {
      'is-overlay': overlay
    })}
  >
    <div className="loader-background" onClick={onClick} />
    <div className="loader-icon" />
  </Element>
);

Loader.defaultProps = {
  ...modifiers.defaultProps,
  overlay: false
};
