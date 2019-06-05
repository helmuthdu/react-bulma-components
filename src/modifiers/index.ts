import cn from 'classnames';
import colors, { ColorsModifier } from './colors';
import helpers, { HelpersModifier } from './helpers';
import responsive, { ResponsiveModifier } from './responsives';
import typography, { TypographyModifier } from './typography';

const compose = (...fns: any[]) => (args: any) => fns.reduce((arg: any, fn) => fn(arg), args);

export type Modifiers = ColorsModifier &
  HelpersModifier &
  ResponsiveModifier &
  TypographyModifier & {
    className?: any;
    children?: React.ReactNode;
    renderAs?: string | ((...args: any | any[]) => any);
    style?: React.CSSProperties;
  };

export default {
  defaultProps: {
    ...helpers.defaultProps,
    ...responsive.defaultProps,
    ...colors.defaultProps,
    ...typography.defaultProps
  },
  getClassName: (props: any) =>
    cn(
      helpers.getClassName(props),
      responsive.getClassName(props),
      colors.getClassName(props),
      typography.getClassName(props)
    ),
  clean: (props: any) =>
    compose(
      helpers.clean,
      responsive.clean,
      colors.clean,
      typography.clean
    )(props)
};
