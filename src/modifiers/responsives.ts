/* eslint-disable no-unused-vars */
import cn from 'classnames';

type SizeShape = {
  display?: {
    value?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
    only?: boolean;
  };
  hide?: {
    value?: boolean;
    only?: boolean;
  };
  textSize?: {
    value?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  textAlignment?: {
    value?: 'centered' | 'justified' | 'left' | 'right';
    only?: boolean;
  };
};

export type ResponsiveModifier = {
  responsive?: {
    mobile?: SizeShape;
    tablet?: SizeShape;
    desktop?: SizeShape;
    widescreen?: SizeShape;
    fullhd?: SizeShape;
    touch?: SizeShape;
  };
};

const getSizeClassFromProp = (sizes: { [key: string]: SizeShape }) =>
  Object.keys(sizes).reduce((classes, size) => {
    const display = sizes[size].display || {};
    const hide = sizes[size].hide || {};
    const textAlignment = sizes[size].textAlignment || {};
    const textSize = sizes[size].textSize || {};

    const obj = {
      ...classes,
      [`has-text-${textAlignment.value}-${size}${textAlignment.only ? '-only' : ''}`]: textAlignment.value,
      [`is-${display.value}-${size}${display.only ? '-only' : ''}`]: display.value,
      [`is-hidden-${size}${hide.only ? '-only' : ''}`]: hide.value,
      [`is-size-${textSize.value}-${size}`]: (textSize.value || -1) > 0
    };

    return obj;
  }, {});

export default {
  defaultProps: {
    responsive: undefined
  },
  getClassName: (props: any) =>
    cn({
      ...getSizeClassFromProp(props.responsive || {})
    }),
  clean: ({ responsive, ...props }: ResponsiveModifier) => props
};
