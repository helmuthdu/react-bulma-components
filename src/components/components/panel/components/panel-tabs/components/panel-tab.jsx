import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../../modifiers';
import { Element } from '../../../../../layout/element';

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
  active: PropTypes.bool,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelTabsTab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'a'
};
