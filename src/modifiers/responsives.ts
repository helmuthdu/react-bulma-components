/* eslint-disable no-unused-vars */
import cn from 'classnames';

const getSizeClassFromProp = sizes =>
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
      [`is-size-${textSize.value}-${size}`]: textSize.value > 0
    };

    return obj;
  }, {});

type SizeShape = {
  display?: Partial<{
    value: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
    only: boolean;
  }>;
  hide?: Partial<{
    value: boolean;
    only: boolean;
  }>;
  textSize?: Partial<{
    value: 1 | 2 | 3 | 4 | 5 | 6;
  }>;
  textAlignment?: Partial<{
    value: 'centered' | 'justified' | 'left' | 'right';
    only: boolean;
  }>;
};

export type ResponsiveModifier = Partial<{
  responsive: Partial<{
    mobile: SizeShape;
    tablet: SizeShape;
    desktop: SizeShape;
    widescreen: SizeShape;
    fullhd: SizeShape;
    touch: SizeShape;
  }>;
}>;

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
