import cn from 'classnames';
import * as React from 'react';
import colors, { ColorsModifier } from './colors';
import helpers, { HelpersModifier } from './helpers';
import responsive, { ResponsiveModifier } from './responsives';
import typography, { TypographyModifier } from './typography';

const compose = (...fns: any[]) => (args: any) => fns.reduce((arg: any, fn) => fn(arg), args);

export type ElementModifier = ColorsModifier &
  HelpersModifier &
  ResponsiveModifier &
  TypographyModifier & {
    className?: any;
    children?: React.ReactNode;
    renderAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
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
