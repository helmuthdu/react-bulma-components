/* eslint-disable no-unused-vars */
import cn from 'classnames';
import PropTypes from 'prop-types';
import CONSTANTS from '../constants';

const colors = [...Object.values(CONSTANTS.COLORS), ...Object.values(CONSTANTS.GREY_COLORS)];

export default {
  propTypes: {
    textColor: PropTypes.oneOf(colors),
    backgroundColor: PropTypes.oneOf(colors)
  },
  defaultProps: {},
  getClassName: props =>
    cn({
      [`has-text-${props.textColor}`]: props.textColor,
      [`has-background-${props.backgroundColor}`]: props.backgroundColor
    }),
  clean: ({ textColor, backgroundColor, ...props }) => props
};
