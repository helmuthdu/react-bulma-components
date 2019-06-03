import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type SectionProps = Partial<Modifiers> & {
  size?: 'medium' | 'large';
};
export const Section: React.FunctionComponent<SectionProps> = ({ children, className, size, ...props }: any) => (
  <Element
    {...props}
    className={cn('section', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);
Section.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'section'
};
