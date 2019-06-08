export const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

export type Breakpoints = null | 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd' | 'touch';

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

export type Spacing = 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'horizontal' | 'vertical';

export type Scale =
  | 16
  | 24
  | 32
  | 48
  | 64
  | 96
  | 128
  | '1by1'
  | '1by2'
  | '1by3'
  | '2by1'
  | '2by3'
  | '3by1'
  | '3by2'
  | '3by4'
  | '3by5'
  | '4by3'
  | '4by5'
  | '5by3'
  | '5by4'
  | '9by16'
  | '16by9';
