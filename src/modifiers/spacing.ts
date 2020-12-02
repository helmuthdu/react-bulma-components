import clsx from 'clsx';
import { Spacing } from '../constants';

export type SpacingModifier = {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingLeft?: Spacing;
  paddingBottom?: Spacing;
  paddingRight?: Spacing;
  paddingHorizontal?: Spacing;
  paddingVertical?: Spacing;
  margin?: Spacing;
  marginTop?: Spacing;
  marginLeft?: Spacing;
  marginBottom?: Spacing;
  marginRight?: Spacing;
  marginHorizontal?: Spacing;
  marginVertical?: Spacing;
};

const modifier = {
  defaultProps: {},
  getClassName: ({
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,
    padding,
    paddingBottom,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingVertical
  }: SpacingModifier): string =>
    clsx({
      [`p-${padding}`]: padding,
      [`pt-${paddingTop}`]: paddingTop,
      [`pl-${paddingLeft}`]: paddingLeft,
      [`pb-${paddingBottom}`]: paddingBottom,
      [`pr-${paddingRight}`]: paddingRight,
      [`px-${paddingHorizontal}`]: paddingHorizontal,
      [`py-${paddingVertical}`]: paddingVertical,
      [`m-${margin}`]: margin,
      [`mt-${marginTop}`]: marginTop,
      [`ml-${marginLeft}`]: marginLeft,
      [`mb-${marginBottom}`]: marginBottom,
      [`mr-${marginRight}`]: marginRight,
      [`mx-${marginHorizontal}`]: marginHorizontal,
      [`my-${marginVertical}`]: marginVertical
    }),
  clean: ({
    padding,
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
    paddingHorizontal,
    paddingVertical,
    margin,
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
    marginHorizontal,
    marginVertical,
    ...props
  }: SpacingModifier) => props
};

export default modifier;
