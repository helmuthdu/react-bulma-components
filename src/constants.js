export default {
  IS_CLIENT: !!(typeof window !== 'undefined' && window.document && window.document.createElement),
  BREAKPOINTS: {
    MOBILE: 'mobile',
    TABLET: 'tablet',
    DESKTOP: 'desktop',
    WIDESCREEN: 'widescreen',
    FULLHD: 'fullhd',
    TOUCH: 'touch'
  },
  COLORS: {
    BLACK: 'black',
    DANGER: 'danger',
    DARK: 'dark',
    INFO: 'info',
    LIGHT: 'light',
    LINK: 'link',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    WHITE: 'white'
  },
  GREY_COLORS: {
    BLACK_BIS: 'black-bis',
    BLACK_TER: 'black-ter',
    GREY: 'grey',
    GREY_DARK: 'grey-dark',
    GREY_DARKER: 'grey-darker',
    GREY_LIGHT: 'grey-light',
    GREY_LIGHTER: 'grey-lighter',
    WHITE_BIS: 'white-bis',
    WHITE_TER: 'white-ter'
  },
  SIZES: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  }
};
