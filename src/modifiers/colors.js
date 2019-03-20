/* eslint-disable no-unused-vars */
import cn from 'classnames';
import PropTypes from 'prop-types';
import CONSTANTS from '../constants';

const colors = [...Object.values(CONSTANTS.COLORS), ...Object.values(CONSTANTS.GREY_COLORS)];

export default {
  propTypes: {
    backgroundColor: PropTypes.oneOf(colors),
    textColor: PropTypes.oneOf(colors)
  },
  defaultProps: {},
  getClassName: props =>
    cn({
      [`has-background-${props.backgroundColor}`]: props.backgroundColor,
      [`has-text-${props.textColor}`]: props.textColor
    }),
  clean: ({ textColor, backgroundColor, ...props }) => props
};
