export default {
  IS_CLIENT: !!(typeof window !== 'undefined' && window.document && window.document.createElement),
  BREAKPOINTS: {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
    WIDESCREEN: 'widescreen',
    FULLHD: 'fullhd',
    TOUCH: 'touch'
  },
  COLORS: {
    PRIMARY: 'primary',
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    LIGHT: 'light',
    DARK: 'dark',
    WHITE: 'white',
    BLACK: 'black',
    LINK: 'link'
  },
  GREY_COLORS: {
    BLACK_BIS: 'black-bis',
    BLACK_TER: 'black-ter',
    GREY_DARKER: 'grey-darker',
    GREY_DARK: 'grey-dark',
    GREY: 'grey',
    GREY_LIGHT: 'grey-light',
    GREY_LIGHTER: 'grey-lighter',
    WHITE_TER: 'white-ter',
    WHITE_BIS: 'white-bis'
  },
  SIZES: {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
  }
};
