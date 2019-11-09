/* eslint-disable no-unused-vars */
import clsx from 'clsx';

export type TypographyModifier = {
  textSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  textAlignment?: 'centered' | 'justified' | 'left' | 'right';
  textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
  textWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  italic?: boolean;
};

export default {
  defaultProps: {
    italic: false
  },
  getClassName: (props: any) =>
    clsx({
      [`has-text-${props.textAlignment}`]: props.textAlignment,
      [`has-text-weight-${props.textWeight}`]: props.textWeight,
      [`is-${props.textTransform}`]: props.textTransform,
      [`is-size-${props.textSize}`]: props.textSize,
      'is-italic': props.italic
    }),
  clean: ({ textWeight, textTransform, italic, textSize, textAlignment, ...props }: TypographyModifier) => props
};
