export const IS_CLIENT = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd' | 'touch';

export type Colors =
  | 'black'
  | 'danger'
  | 'dark'
  | 'info'
  | 'light'
  | 'link'
  | 'primary'
  | 'success'
  | 'warning'
  | 'white';

export type Greyscale =
  | 'black-bis'
  | 'black-ter'
  | 'grey'
  | 'grey-dark'
  | 'grey-darker'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-bis'
  | 'white-ter';

export type Sizes = 'small' | 'medium' | 'large';

export type Propportions =
  | 16
  | 24
  | 32
  | 48
  | 64
  | 96
  | 128
  | 'square'
  | '1by1'
  | '4by3'
  | '3by2'
  | '16by9'
  | '2by1'
  | '5by4'
  | '5by3'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3';
