import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { Column } from './components/column';
import COLUMN_CONSTANTS from './constants';

const breakpoints = Object.values(CONSTANTS.BREAKPOINTS);

export const Columns = ({ className, breakpoint, gapless, multiline, centered, ...props }) => (
  <Element
    {...props}
    className={cn(className, 'columns', {
      [`is-${breakpoint}`]: breakpoint,
      'is-gapless': gapless,
      'is-multiline': multiline,
      'is-centered': centered
    })}
  />
);

Columns.Column = Column;
Columns.CONSTANTS = COLUMN_CONSTANTS;

Columns.propTypes = {
  ...modifiers.propTypes,
  breakpoint: PropTypes.oneOf(breakpoints),
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  multiline: PropTypes.bool,
  style: PropTypes.object
};

Columns.defaultProps = {
  ...modifiers.defaultProps,
  centered: false,
  gapless: false,
  multiline: true
};
