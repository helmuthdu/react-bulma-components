import clsx from 'clsx';
import { Colors, Greyscale } from '../constants';

export type ColorsModifier = {
  backgroundColor?: Colors | Greyscale;
  textColor?: Colors | Greyscale;
};

const modifier = {
  defaultProps: {},
  getClassName: ({ backgroundColor, textColor }: ColorsModifier) =>
    clsx({
      [`has-background-${backgroundColor}`]: backgroundColor,
      [`has-text-${textColor}`]: textColor
    }),
  clean: ({ textColor, backgroundColor, ...props }: ColorsModifier) => props
};

export default modifier;
