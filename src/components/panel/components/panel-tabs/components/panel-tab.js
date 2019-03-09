import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../element';

export const PanelTabsTab = ({ className, active, ...props }) => (
  <Element
    {...props}
    className={cn(className, {
      'is-active': active
    })}
  />
);

PanelTabsTab.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  active: PropTypes.bool
};

PanelTabsTab.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'a',
  active: false
};
