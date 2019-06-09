import cn from 'classnames';
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
  getClassName: (props: any) =>
    cn({
      [`has-padding-${props.padding}`]: props.padding,
      [`has-padding-top-${props.paddingTop}`]: props.paddingTop,
      [`has-padding-left-${props.paddingLeft}`]: props.paddingLeft,
      [`has-padding-bottom-${props.paddingBottom}`]: props.paddingBottom,
      [`has-padding-right-${props.paddingRight}`]: props.paddingRight,
      [`has-padding-horizontal-${props.paddingHorizontal}`]: props.paddingHorizontal,
      [`has-padding-vertical-${props.paddingVertical}`]: props.paddingVertical,
      [`has-margin-${props.margin}`]: props.margin,
      [`has-margin-top-${props.marginTop}`]: props.marginTop,
      [`has-margin-left-${props.marginLeft}`]: props.marginLeft,
      [`has-margin-bottom-${props.marginBottom}`]: props.marginBottom,
      [`has-margin-right-${props.marginRight}`]: props.marginRight,
      [`has-margin-horizontal-${props.marginHorizontal}`]: props.marginHorizontal,
      [`has-margin-vertical-${props.marginVertical}`]: props.marginVertical
    }),
  clean: ({
    padding,
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
    margin,
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
    ...props
  }: SpacingModifier) => props
};
