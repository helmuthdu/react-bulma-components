import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../layout/element';
import { PanelTabsTab } from './components';

export const PanelTabs = ({ className, ...props }) => <Element {...props} className={cn('panel-tabs', className)} />;

PanelTabs.Tab = PanelTabsTab;

PanelTabs.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelTabs.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
