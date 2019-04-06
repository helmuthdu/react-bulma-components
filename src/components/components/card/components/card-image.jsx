import cn from 'classnames';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../layout/element';
import { Image } from '../../../elements/image';

export const CardImage = ({ className, ...props }) => (
  <Element className={cn('card-image', className)}>
    <Image {...props} />
  </Element>
);

CardImage.propTypes = {
  ...modifiers.propTypes,
  ...Image.propTypes
};

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};
