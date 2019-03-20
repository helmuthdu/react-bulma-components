/* eslint-disable no-unused-vars */
import cn from 'classnames';
import PropTypes from 'prop-types';

export default {
  propTypes: {
    clearfix: PropTypes.bool,
    clipped: PropTypes.bool,
    hidden: PropTypes.bool,
    invisible: PropTypes.bool,
    marginless: PropTypes.bool,
    overlay: PropTypes.bool,
    paddingless: PropTypes.bool,
    pull: PropTypes.oneOf(['right', 'left']),
    radiusless: PropTypes.bool,
    shadowless: PropTypes.bool,
    unselectable: PropTypes.bool
  },
  defaultProps: {
    clearfix: false,
    clipped: false,
    hidden: false,
    invisible: false,
    marginless: false,
    overlay: false,
    paddingless: false,
    radiusless: false,
    shadowless: false,
    unselectable: false
  },
  getClassName: props =>
    cn({
      'is-clearfix': props.clearfix,
      'is-clipped': props.clipped,
      'is-hidden': props.hidden,
      'is-invisible': props.invisible,
      'is-marginless': props.marginless,
      'is-overlay': props.overlay,
      'is-paddingless': props.paddingless,
      'is-radiusless': props.radiusless,
      'is-shadowless': props.shadowless,
      'is-unselectable': props.unselectable,
      [`is-pulled-${props.pull}`]: props.pull
    }),
  clean: ({
    clearfix,
    clipped,
    hidden,
    invisible,
    marginless,
    overlay,
    paddingless,
    pull,
    radiusless,
    shadowless,
    unselectable,
    ...props
  }) => props
};
