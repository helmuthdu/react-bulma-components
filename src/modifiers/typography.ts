/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import { TextAlignment } from '../constants';

type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type TypographyModifier = {
  textSize?: TextSize;
  textAlignment?: TextAlignment;
  textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
  textWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  italic?: boolean;
};

export default {
  defaultProps: {
    italic: false
  },
  getClassName: ({ textAlignment, textWeight, textTransform, textSize, italic }: TypographyModifier) =>
    clsx({
      [`has-text-${textAlignment}`]: textAlignment,
      [`has-text-weight-${textWeight}`]: textWeight,
      [`is-${textTransform}`]: textTransform,
      [`is-size-${textSize}`]: textSize !== undefined,
      'is-italic': italic
    }),
  clean: ({ textWeight, textTransform, italic, textSize, textAlignment, ...props }: TypographyModifier) => props
};
