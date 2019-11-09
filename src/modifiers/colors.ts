import clsx from 'clsx';
import { Colors, Greyscale } from '../constants';

export type ColorsModifier = {
  backgroundColor?: Colors | Greyscale;
  textColor?: Colors | Greyscale;
};

export default {
  defaultProps: {},
  getClassName: (props: any) =>
    clsx({
      [`has-background-${props.backgroundColor}`]: props.backgroundColor,
      [`has-text-${props.textColor}`]: props.textColor
    }),
  clean: ({ textColor, backgroundColor, ...props }: ColorsModifier) => props
};
