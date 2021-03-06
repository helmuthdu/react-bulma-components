import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type LoaderProps = ElementModifier & {
  active?: boolean;
  fullscreen?: boolean;
  inverted?: boolean;
  onClick?: (...args: any[]) => any;
};

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ active, children, fullscreen, inverted, onClick, className, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'loader',
        {
          'is-active': active,
          'is-fullscreen': fullscreen
        },
        className
      )}
      {...props}>
      <div
        className={clsx('loader-background', {
          'is-inverted': inverted
        })}
        onClick={onClick}
      />
      <div className="loader-icon" />
      {children}
    </Element>
  )
);

Loader.defaultProps = {
  ...modifiers.defaultProps
};

Loader.displayName = 'Loader';
