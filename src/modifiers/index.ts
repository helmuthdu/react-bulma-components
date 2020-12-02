/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx';
import * as React from 'react';
import colors, { ColorsModifier } from './colors';
import helpers, { HelpersModifier } from './helpers';
import responsive, { ResponsiveModifier } from './responsive';
import spacing, { SpacingModifier } from './spacing';
import typography, { TypographyModifier } from './typography';

const compose = (...fns: any[]) => (args: any) => fns.reduce((arg: any, fn) => fn(arg), args);

type StandardModifier = {
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  style?: React.CSSProperties;
};

export type ElementModifier = StandardModifier &
  ColorsModifier &
  HelpersModifier &
  ResponsiveModifier &
  SpacingModifier &
  TypographyModifier;

const modifiers = {
  defaultProps: {
    ...colors.defaultProps,
    ...helpers.defaultProps,
    ...responsive.defaultProps,
    ...spacing.defaultProps,
    ...typography.defaultProps
  },
  getClassName: (props: ElementModifier) =>
    clsx(
      colors.getClassName(props),
      helpers.getClassName(props),
      responsive.getClassName(props),
      spacing.getClassName(props),
      typography.getClassName(props)
    ),
  clean: (props: ElementModifier) =>
    compose(colors.clean, helpers.clean, responsive.clean, spacing.clean, typography.clean)(props)
};

export default modifiers;
