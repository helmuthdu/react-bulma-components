import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { CardContent } from './components/content';
import { CardFooter } from './components/footer';
import { CardHeader } from './components/header';
import { CardImage } from './components/image';

export const Card = ({ className, children, ...props }) => (
  <Element className={cn('card', className)} {...props}>
    {children}
  </Element>
);

Card.Image = CardImage;
Card.Content = CardContent;
Card.Header = CardHeader;
Card.Footer = CardFooter;

Card.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

Card.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
