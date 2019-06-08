import cn from 'classnames';
import * as React from 'react';
import colors, { ColorsModifier } from './colors';
import helpers, { HelpersModifier } from './helpers';
import responsive, { ResponsiveModifier } from './responsives';
import spacing, { SpacingModifier } from './spacing';
import typography, { TypographyModifier } from './typography';

const compose = (...fns: any[]) => (args: any) => fns.reduce((arg: any, fn) => fn(arg), args);

export type ElementModifier = ColorsModifier &
  HelpersModifier &
  ResponsiveModifier &
  SpacingModifier &
  TypographyModifier & {
    className?: any;
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    style?: React.CSSProperties;
    testId?: string | string[];
  };

export default {
  defaultProps: {
    ...colors.defaultProps,
    ...helpers.defaultProps,
    ...responsive.defaultProps,
    ...spacing.defaultProps,
    ...typography.defaultProps
  },
  getClassName: (props: any) =>
    cn(
      colors.getClassName(props),
      helpers.getClassName(props),
      responsive.getClassName(props),
      spacing.getClassName(props),
      typography.getClassName(props)
    ),
  clean: (props: any) =>
    compose(
      colors.clean,
      helpers.clean,
      responsive.clean,
      spacing.clean,
      typography.clean
    )(props)
};
