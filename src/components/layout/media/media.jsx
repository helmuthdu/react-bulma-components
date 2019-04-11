import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';
import { MediaContent, MediaItem } from './components';

export const Media = ({ children, className, ...props }) => (
  <Element {...props} className={cn('media', className)}>
    {children}
  </Element>
);

Media.Item = MediaItem;
Media.Content = MediaContent;

Media.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Media.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'article'
};
