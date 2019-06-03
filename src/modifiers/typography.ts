/* eslint-disable no-unused-vars */
import cn from 'classnames';

export type TypographyModifier = {
  textSize: 1 | 2 | 3 | 4 | 5 | 6;
  textAlignment: 'centered' | 'justified' | 'left' | 'right';
  textTransform: 'capitalized' | 'lowercase' | 'uppercase';
  textWeight: 'light' | 'normal' | 'semibold' | 'bold';
  italic: boolean;
};

export default {
  defaultProps: {
    italic: false
  },
  getClassName: (props: any) =>
    cn({
      [`has-text-${props.textAlignment}`]: props.textAlignment,
      [`has-text-weight-${props.textWeight}`]: props.textWeight,
      [`is-${props.textTransform}`]: props.textTransform,
      [`is-size-${props.textSize}`]: props.textSize,
      'is-italic': props.italic
    }),
  clean: ({ textWeight, textTransform, italic, textSize, textAlignment, ...props }: any) => props
};
