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

export default {
  defaultProps: {},
  getClassName: (props: SpacingModifier) =>
    clsx({
      [`p-${props.padding}`]: props.padding,
      [`pt-${props.paddingTop}`]: props.paddingTop,
      [`pl-${props.paddingLeft}`]: props.paddingLeft,
      [`pb-${props.paddingBottom}`]: props.paddingBottom,
      [`pr-${props.paddingRight}`]: props.paddingRight,
      [`px-${props.paddingHorizontal}`]: props.paddingHorizontal,
      [`py-${props.paddingVertical}`]: props.paddingVertical,
      [`m-${props.margin}`]: props.margin,
      [`mt-${props.marginTop}`]: props.marginTop,
      [`ml-${props.marginLeft}`]: props.marginLeft,
      [`mb-${props.marginBottom}`]: props.marginBottom,
      [`mr-${props.marginRight}`]: props.marginRight,
      [`mx-${props.marginHorizontal}`]: props.marginHorizontal,
      [`my-${props.marginVertical}`]: props.marginVertical
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
