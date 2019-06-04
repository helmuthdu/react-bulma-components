import * as React from 'react';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type Color = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark' | 'white' | 'black' | 'link';

type GreyColor =
  | 'black-bis'
  | 'black-ter'
  | 'grey-darker'
  | 'grey-dark'
  | 'grey'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-ter'
  | 'white-bis';

type Breakpoint = 'desktop' | 'tablet' | 'mobile' | 'widescreen' | 'fullhd';

type Size = 'small' | 'medium' | 'large';

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/colors.js
interface ColorProps {
  backgroundColor?: Color | GreyColor;
  textColor?: Color | GreyColor;
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/helpers.js
interface HelperProps {
  clearfix?: boolean;
  clipped?: boolean;
  hidden?: boolean;
  invisible?: boolean;
  marginless?: boolean;
  overlay?: boolean;
  paddingless?: boolean;
  pull?: 'right' | 'left';
  radiusless?: boolean;
  shadowless?: boolean;
  unselectable?: boolean;
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/responsives.js
interface ResponsiveSizeProps {
  display?: {
    value?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
    only?: boolean;
  };
  hide?: {
    value?: boolean;
    only?: boolean;
  };
  textSize?: {
    value?: 1 | 2 | 3 | 4 | 5 | 6;
  };
  textAlignment?: {
    value?: 'centered' | 'justified' | 'left' | 'right';
    only?: boolean;
  };
}

interface ResponsiveProps {
  responsive?: {
    mobile?: ResponsiveSizeProps;
    tablet?: ResponsiveSizeProps;
    desktop?: ResponsiveSizeProps;
    widescreen?: ResponsiveSizeProps;
    fullhd?: ResponsiveSizeProps;
    touch?: ResponsiveSizeProps;
  };
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/typography.js
interface TypographyProps {
  italic?: boolean;
  textAlignment?: 'centered' | 'justified' | 'left' | 'right';
  textSize?: 1 | 2 | 3 | 4 | 5 | 6;
  textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
  textWeight?: 'light' | 'normal' | 'semibold' | 'bold';
}

// https://github.com/couds/react-bulma-components/blob/master/src/modifiers/index.js
type ModifierProps = ColorProps & HelperProps & ResponsiveProps & TypographyProps;

/*** Box ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/box/box.js
interface BoxProps extends ElementProps {}
declare const Box: React.FunctionComponent<BoxProps>;

/*** Breadcrumb ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/breadcrumb/breadcrumb.js
interface BreadcrumbModifierProps {
  align?: 'right' | 'center';
  hrefAttr?: string;
  items?: Array<{ url: string; active?: boolean; name?: React.ReactNode }>;
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: Size;
}
interface BreadcrumbProps
  extends ElementProps,
    BreadcrumbModifierProps,
    Partial<Omit<React.ComponentProps<'a'>, 'unselectable'>> {
  renderAs?: 'a' | React.ComponentType<any>;
}
declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;

/*** Button ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/button/button.js
interface ButtonModifierProps {
  color?: Color;
  disabled?: boolean;
  fullwidth?: boolean;
  inactive?: boolean;
  inverted?: boolean;
  loading?: boolean;
  outlined?: boolean;
  remove?: boolean;
  reset?: boolean;
  rounded?: boolean;
  selected?: boolean;
  size?: 'small' | 'normal' | 'medium' | 'large';
  state?: 'hover' | 'focus' | 'active' | 'loading';
  submit?: boolean;
  text?: boolean;
}
interface ButtonProps
  extends ElementProps,
    ButtonModifierProps,
    Partial<Omit<React.ComponentProps<'a' | 'button' | 'span'>, 'color' | 'unselectable'>> {
  renderAs?: 'a' | 'button' | 'span' | React.ComponentType<any>;
  onClick?: React.MouseEventHandler<any>;
}
interface Button extends React.FunctionComponent<ButtonProps> {
  Group: typeof ButtonGroup;
}
declare const Button: Button;

// https://github.com/couds/react-bulma-components/blob/master/src/components/button/components/button-group.js
interface ButtonGroupModifierProps {
  hasAddons?: boolean;
  size?: Size;
  position?: 'centered' | 'right';
}
type ButtonGroupProps = ElementProps & ButtonGroupModifierProps;
declare const ButtonGroup: React.FunctionComponent<ButtonGroupProps>;

/*** Card ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/card/card.js
interface CardProps extends ElementProps {}
interface Card extends React.FunctionComponent<CardProps> {
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Header: typeof CardHeader;
  Image: typeof CardImage;
}
declare const Card: Card;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/content.js
type CardContentProps = ElementProps;
declare const CardContent: React.FunctionComponent<CardContentProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/image.js
type CardImageProps = ElementProps & ImageProps;
declare const CardImage: React.FunctionComponent<CardImageProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/footer/footer.js
type CardFooterProps = ElementProps;
interface CardFooter extends React.FunctionComponent<CardFooterProps> {
  Item: typeof CardFooterItem;
}
declare const CardFooter: CardFooter;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/footer/components/footer-item.js
type CardFooterItemProps = ElementProps;
declare const CardFooterItem: React.FunctionComponent<CardFooterItemProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/header/index.js
type CardHeaderProps = ElementProps;
interface CardHeader extends React.FunctionComponent<CardHeaderProps> {
  Icon: typeof CardHeaderIcon;
  Title: typeof CardHeaderTitle;
}
declare const CardHeader: CardHeader;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/header/components/header-icon.js
type CardHeaderIconProps = ElementProps;
declare const CardHeaderIcon: React.FunctionComponent<CardHeaderIconProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/card/components/header/components/header-title.js
type CardHeaderTitleProps = ElementProps;
declare const CardHeaderTitle: React.FunctionComponent<CardHeaderTitleProps>;

/*** Columns ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/columns/columns.js
interface ColumnsModifierProps {
  breakpoint?: Breakpoint;
  centered?: boolean;
  gapless?: boolean;
  multiline?: boolean;
}
interface ColumnsProps
  extends ElementProps,
    ColumnsModifierProps,
    Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {}
interface Columns extends React.FunctionComponent<ColumnsProps> {
  Column: typeof Column;
}
declare const Columns: Columns;

// https://github.com/couds/react-bulma-components/blob/master/src/components/columns/components/column.js
type ColumnSize =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth'
  | 'two-fifths'
  | 'three-fifths'
  | 'four-fifths';

interface ColumnSizeModifierProps {
  narrow?: boolean;
  offset?: ColumnSize;
  size?: ColumnSize;
}

interface ColumnModifierProps {
  mobile?: ColumnSizeModifierProps;
  table?: ColumnSizeModifierProps;
  desktop?: ColumnSizeModifierProps;
  widescreen?: ColumnSizeModifierProps;
  fullhd?: ColumnSizeModifierProps;
}

interface ColumnProps
  extends ElementProps,
    ColumnModifierProps,
    ColumnSizeModifierProps,
    Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {}
declare const Column: React.FunctionComponent<ColumnProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/container/container.js
interface ContainerProps extends ElementProps {
  breakpoint?: Breakpoint;
  fluid?: boolean;
}
declare const Container: React.FunctionComponent<ContainerProps>;

/*** Content ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/content/content.js
interface ContentProps extends ElementProps {
  size?: Size;
}
declare const Content: React.FunctionComponent<ContentProps>;

/*** Dropdown ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/dropdown/dropdown.js
interface DropdownModifierProps {
  color?: Color;
  hoverable?: boolean;
  label?: string;
  onChange?: React.ChangeEventHandler<'div'>;
  right?: boolean;
  up?: boolean;
  value?: any;
}
interface DropdownProps
  extends ElementProps,
    DropdownModifierProps,
    Partial<Omit<React.ComponentProps<'div'>, 'color' | 'onChange' | 'unselectable'>> {}
interface Dropdown extends React.FunctionComponent<DropdownProps> {
  Divider: typeof DropdownDivider;
  Item: typeof DropdownItem;
}
declare const Dropdown: Dropdown;

// https://github.com/couds/react-bulma-components/blob/master/src/components/dropdown/components/divider.js
interface DropdownDividerProps extends ElementProps, Partial<Omit<React.ComponentProps<'hr'>, 'unselectable'>> {}
declare const DropdownDivider: React.FunctionComponent<DropdownDividerProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/dropdown/components/item.js
interface DropdownItemModifierProps {
  active?: boolean;
  value: any; // todo: should probably be React.ReactNode;
}
interface DropdownItemProps
  extends ElementProps,
    DropdownItemModifierProps,
    Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {
  onClick?: React.MouseEventHandler<any>;
}
declare const DropdownItem: React.FunctionComponent<DropdownItemProps>;

/*** Element ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/element/element.js
interface ElementProps extends ModifierProps {
  className?: string;
  renderAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
declare const Element: React.FunctionComponent<ElementProps>;

/*** Footer ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/footer/footer.js
interface FooterProps extends ElementProps {}
declare const Footer: React.FunctionComponent<FooterProps>;

/*** Form ***/
interface Form {
  Checkbox: typeof Checkbox;
  Control: typeof Control;
  Field: typeof Field;
  Help: typeof Help;
  Input: typeof Input;
  InputFile: typeof InputFile;
  Label: typeof Label;
  Radio: typeof Radio;
  Select: typeof Select;
  Switch: typeof Switch;
  Textarea: typeof Textarea;
}
declare const Form: Form;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/checkbox.js
interface CheckboxProps extends ElementProps, Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
}
declare const Checkbox: React.FunctionComponent<CheckboxProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/control.js
interface ControlModifierProps {
  fullwidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: Size;
}
interface ControlProps extends ElementProps, ControlModifierProps {}
declare const Control: React.FunctionComponent<ControlProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/field/field.js
interface FieldModifierProps {
  align?: 'centered' | 'right';
  context?: 'addons' | 'group';
  mulitline?: boolean;
  horizontal?: boolean;
}
interface FieldProps extends ElementProps, FieldModifierProps {}
interface Field extends React.FunctionComponent<FieldProps> {
  Body: typeof FieldBody;
  Label: typeof FieldLabel;
}
declare const Field: Field;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/help.js
interface FieldBodyProps extends ElementProps {}
declare const FieldBody: React.FunctionComponent<FieldBodyProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/label.js
interface FieldLabelModifierProps {
  size?: 'small' | 'normal' | 'medium' | 'large';
}
interface FieldLabelProps extends ElementProps, FieldLabelModifierProps {}
declare const FieldLabel: React.FunctionComponent<FieldLabelProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/help.js
interface HelpProps extends ElementProps, Partial<Omit<React.ComponentProps<'p'>, 'unselectable'>> {
  color?: Color;
}
declare const Help: React.FunctionComponent<HelpProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/input-file.js
interface InputFileModifierProps {
  color?: Color;
  fileName?: boolean;
  fullwidth?: boolean;
  right?: boolean;
  boxed?: boolean;
  label?: string;
  icon?: React.ReactElement<any>;
  size?: Size;
}
interface InputFileProps
  extends ElementProps,
    InputFileModifierProps,
    Partial<Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable'>> {
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare const InputFile: React.FunctionComponent<InputFileProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/input.js
interface InputModifierProps {
  color?: Color;
  inactive?: boolean;
  size?: Size;
}
interface InputProps
  extends ElementProps,
    InputModifierProps,
    Partial<Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable'>> {
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search' | 'color' | 'date' | 'time' | 'datetime-local';
  value?: string | number;
}
declare const Input: React.FunctionComponent<InputProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/label.js
interface LabelModifierProps {
  htmlFor?: string;
  size?: Size;
}
interface LabelProps
  extends ElementProps,
    LabelModifierProps,
    Partial<Omit<React.ComponentProps<'label'>, 'unselectable'>> {}
declare const Label: React.FunctionComponent<LabelProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/radio.js
interface RadioProps extends ElementProps, Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> {
  checked?: boolean;
  disabled?: boolean;
  name: string;
  value?: string | number;
}
declare const Radio: React.FunctionComponent<RadioProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/switch.js
interface SwitchProps extends ElementProps, Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> {
  name: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string | number;
}
declare const Switch: React.FunctionComponent<SwitchProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/select.js
interface SelectModifierProps {
  color?: Color;
}
interface SelectProps
  extends ElementProps,
    SelectModifierProps,
    Partial<Omit<React.ComponentProps<'select'>, 'size' | 'color' | 'unselectable'>> {
  disabled?: boolean;
  empty?: boolean;
  loading?: boolean;
  multiple?: boolean;
  name?: string;
  readOnly?: boolean;
  rounded?: boolean;
  size?: Size;
  value?: string | number | Array<any>;
}
declare const Select: React.FunctionComponent<SelectProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/form/components/textarea.js
interface TextareaModifierProps {
  size?: Size;
  color?: Color;
}
interface TextareaProps
  extends ElementProps,
    TextareaModifierProps,
    Partial<Omit<React.ComponentProps<'textarea'>, 'color' | 'unselectable'>> {
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  rows?: number;
  value?: string | number;
}
declare const Textarea: React.FunctionComponent<TextareaProps>;

/*** Heading ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/heading/heading.js
interface HeadingModifierProps {
  heading?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  spaced?: boolean;
  subtitle?: boolean;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
}
interface HeadingProps extends ElementProps, HeadingModifierProps {}
declare const Heading: React.FunctionComponent<HeadingProps>;

/*** Hero ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/hero.js
interface HeroModifierProps {
  color?: Color;
  gradient?: boolean;
  size?: Size | 'fullheight';
}
interface HeroProps extends ElementProps, HeroModifierProps {}
interface Hero extends React.FunctionComponent<HeroProps> {
  Body: typeof HeroBody;
  Footer: typeof HeroFooter;
  Head: typeof HeroHead;
}
declare const Hero: Hero;

// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/components/hero-body.js
interface HeroBodyProps extends ElementProps {}
declare const HeroBody: React.FunctionComponent<HeroBodyProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/components/hero-footer.js
interface HeroFooterProps extends ElementProps {}
declare const HeroFooter: React.FunctionComponent<HeroFooterProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/hero/components/hero-head.js
interface HeroHeadProps extends ElementProps {}
declare const HeroHead: React.FunctionComponent<HeroHeadProps>;

/*** Icon ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/icon/icon.js
interface IconModifierProps {
  align?: 'left' | 'right';
  color?: Color;
  icon?: string;
  iconSize?: Size | 'big';
  pack?: 'mdi' | 'fas';
  size?: Size;
}
interface IconProps
  extends ElementProps,
    IconModifierProps,
    Partial<Omit<React.ComponentProps<'span'>, 'color' | 'unselectable'>> {}
declare const Icon: React.FunctionComponent<IconProps>;

/*** Image ***/
type ImageSize =
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
  | '16by9'
  | 'square';

// https://github.com/couds/react-bulma-components/blob/master/src/components/image/image.js
interface ImageModifierProps {
  src: string;
  alt?: string;
  rounded?: boolean;
  size?: ImageSize;
  fallback?: string;
}
interface ImageProps
  extends ElementProps,
    ImageModifierProps,
    Partial<Omit<React.ComponentProps<'figure'>, 'unselectable'>> {}
declare const Image: React.FunctionComponent<ImageProps>;

/*** Level ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/level/level.js
interface LevelModifierProps {
  breakpoint?: Breakpoint;
  color?: Color;
}
interface LevelProps extends ElementProps, LevelModifierProps {}
interface Level extends React.FunctionComponent<LevelProps> {
  Item: typeof LevelItem;
  Side: typeof LevelSide;
}
declare const Level: Level;

// https://github.com/couds/react-bulma-components/blob/master/src/components/level/components/level-item.js
interface LevelItemProps extends ElementProps {}
declare const LevelItem: React.FunctionComponent<LevelItemProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/level/components/level-side.js
interface LevelSideModifierProps {
  align?: string;
}
interface LevelSideProps extends ElementProps, LevelSideModifierProps {}
declare const LevelSide: React.FunctionComponent<LevelSideProps>;

/*** Loader ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/loader/loader.js
interface LoaderProps extends ElementProps {
  overlay?: boolean;
}
declare const Loader: React.FunctionComponent<LoaderProps>;

/*** Media ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/media/media.js
interface MediaProps extends ElementProps {}
interface Media extends React.FunctionComponent<MediaProps> {
  Content: typeof MediaContent;
  Item: typeof MediaItem;
}
declare const Media: Media;

// https://github.com/couds/react-bulma-components/blob/master/src/components/media/components/media-content.js
interface MediaContentProps extends ElementProps {}
declare const MediaContent: React.FunctionComponent<MediaContentProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/media/components/media-item.js
interface MediaItemProps extends ElementProps {}
declare const MediaItem: React.FunctionComponent<MediaItemProps>;

/*** Menu ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/menu/menu.js
interface MenuProps extends ElementProps {
  List: typeof MenuList;
}
declare const Menu: React.FunctionComponent<MenuProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/menu/components/list/list.js
interface MenuListModifierProps {
  title?: string;
}
interface MenuListProps
  extends ElementProps,
    MenuListModifierProps,
    Partial<Omit<React.ComponentProps<'ul'>, 'unselectable'>> {}
interface MenuList extends React.FunctionComponent<MenuListProps> {
  Item: typeof MenuListItem;
}
declare const MenuList: MenuList;

// https://github.com/couds/react-bulma-components/blob/master/src/components/menu/components/list/components/item.js
interface MenuListItemModifierProps {
  active?: boolean;
}
interface MenuListItemProps extends ElementProps, MenuListItemModifierProps {}
declare const MenuListItem: React.FunctionComponent<MenuListItemProps>;

/*** Message ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/message/message.js
interface MessageModifierProps {
  color?: Color;
  size?: Size;
}
interface MessageProps extends ElementProps, MessageModifierProps {}
interface Message extends React.FunctionComponent<MessageProps> {
  Body: typeof MessageBody;
  Header: typeof MessageHeader;
}
declare const Message: Message;

// https://github.com/couds/react-bulma-components/blob/master/src/components/message/components/body.js
interface MessageBodyProps extends ElementProps {}
declare const MessageBody: React.FunctionComponent<MessageBodyProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/message/components/header.js
interface MessageHeaderProps extends ElementProps {}
declare const MessageHeader: React.FunctionComponent<MessageHeaderProps>;

/*** Modal ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/modal.js
interface ModalModifierProps {
  closeOnBlur?: boolean;
  closeOnEsc?: boolean;
  document?: {};
  onClose: () => void;
  show: boolean;
  showClose?: boolean;
}
interface ModalProps extends ElementProps, ModalModifierProps {}
interface Modal extends React.FunctionComponent<ModalProps> {
  Card: typeof ModalCard;
  Content: typeof ModalContent;
}
declare const Modal: Modal;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/card.js
interface ModalCardModifierProps {
  onClose?: () => void;
}
interface ModalCardProps
  extends ElementProps,
    ModalCardModifierProps,
    Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {}
interface ModalCard extends React.FunctionComponent<ModalCardProps> {
  Body: typeof ModalCardBody;
  Foot: typeof ModalCardFoot;
  Head: typeof ModalCardHead;
  Title: typeof ModalCardTitle;
}
declare const ModalCard: ModalCard;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/body.js
interface ModalCardBodyProps extends ElementProps {}
declare const ModalCardBody: React.FunctionComponent<ModalCardBodyProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/foot.js
interface ModalCardFootProps extends ElementProps, Partial<Omit<React.ComponentProps<'footer'>, 'unselectable'>> {}
declare const ModalCardFoot: React.FunctionComponent<ModalCardFootProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/head.js
interface ModalCardHeadModifierProps {
  showClose?: boolean;
  onClose?: () => void;
}
interface ModalCardHeadProps
  extends ElementProps,
    ModalCardHeadModifierProps,
    Partial<Omit<React.ComponentProps<'header'>, 'unselectable'>> {}
declare const ModalCardHead: React.FunctionComponent<ModalCardHeadProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/card/title.js
interface ModalCardTitleProps extends ElementProps, Partial<Omit<React.ComponentProps<'p'>, 'unselectable'>> {}
declare const ModalCardTitle: React.FunctionComponent<ModalCardTitleProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/modal/components/content.js
interface ModalContentProps extends ElementProps {}
declare const ModalContent: React.FunctionComponent<ModalContentProps>;

/*** Navbar ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/navbar.js
interface NavbarModifierProps {
  active?: boolean;
  color?: Color;
  fixed?: 'top' | 'bottom';
  transparent?: boolean;
}
interface NavbarProps extends ElementProps, NavbarModifierProps {}
interface Navbar extends React.FunctionComponent<NavbarProps> {
  Brand: typeof NavbarBrand;
  Burger: typeof NavbarBurger;
  Container: typeof NavbarContainer;
  Divider: typeof NavbarDivider;
  Dropdown: typeof NavbarDropdown;
  Item: typeof NavbarItem;
  Link: typeof NavbarLink;
  Menu: typeof NavbarMenu;
}
declare const Navbar: Navbar;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/brand.js
interface NavbarBrandProps extends ElementProps, Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {}
declare const NavbarBrand: React.FunctionComponent<NavbarBrandProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/burger.js
interface NavbarBurgerProps extends ElementProps, Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {
  onClick?: React.MouseEventHandler<any>;
}
declare const NavbarBurger: React.FunctionComponent<NavbarBurgerProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/container.js
interface NavbarContainerModifierProps {
  position?: 'start' | 'end';
}
interface NavbarContainerProps extends ElementProps, NavbarContainerModifierProps {}
declare const NavbarContainer: React.FunctionComponent<NavbarContainerProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/divider.js
interface NavbarDividerProps extends ElementProps, Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {}
declare const NavbarDivider: React.FunctionComponent<NavbarDividerProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/container.js
interface NavbarDropdownModifierProps {
  boxed?: boolean;
  right?: boolean;
}
interface NavbarDropdownProps extends ElementProps, NavbarDropdownModifierProps {}
declare const NavbarDropdown: React.FunctionComponent<NavbarDropdownProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/item.js
interface NavbarItemModifierProps {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
}
interface NavbarItemProps extends ElementProps, NavbarItemModifierProps {}
declare const NavbarItem: React.FunctionComponent<NavbarItemProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/link.js
interface NavbarLinkProps extends ElementProps {}
declare const NavbarLink: React.FunctionComponent<NavbarLinkProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/navbar/components/menu.js
interface NavbarMenuProps extends ElementProps, Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> {}
declare const NavbarMenu: React.FunctionComponent<NavbarMenuProps>;

/*** Notification ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/notification/notification.js
interface NotificationModifierProps {
  color?: Color;
}
interface NotificationProps extends ElementProps, NotificationModifierProps {}
declare const Notification: React.FunctionComponent<NotificationProps>;

/*** Pagination ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/pagination/pagination.js
interface PaginationModifierProps {
  autoHide?: boolean;
  current?: number;
  delta?: number;
  next?: React.ReactNode;
  onChange?: React.ChangeEventHandler<'nav'>;
  position?: 'centered' | 'right';
  previous?: React.ReactNode;
  rounded?: boolean;
  showPrevNext?: boolean;
  size?: Size;
  total?: number;
}
interface PaginationProps
  extends ElementProps,
    PaginationModifierProps,
    Partial<Omit<React.ComponentProps<'nav'>, 'onChange' | 'unselectable'>> {}
declare const Pagination: React.FunctionComponent<PaginationProps>;

/*** Panel ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/panel.js
type PanelProps = ElementProps;
interface Panel extends React.FunctionComponent<PanelProps> {
  Block: typeof PanelBlock;
  Header: typeof PanelHeader;
  Icon: typeof PanelIcon;
  Tabs: typeof PanelTabs;
}
declare const Panel: Panel;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/block.js
interface PanelBlockModifierProps {
  active?: boolean;
}
type PanelBlockProps = ElementProps & PanelBlockModifierProps;
declare const PanelBlock: React.FunctionComponent<PanelBlockProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/header.js
type PanelHeaderProps = ElementProps;
declare const PanelHeader: React.FunctionComponent<PanelHeaderProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/icon.js
type PanelIconProps = ElementProps;
declare const PanelIcon: React.FunctionComponent<PanelIconProps>;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/tabs/tabs.js
type PanelTabsProps = ElementProps;
interface PanelTabs extends React.FunctionComponent<PanelTabsProps> {
  Tab: typeof PanelTabsTab;
}
declare const PanelTabs: PanelTabs;

// https://github.com/couds/react-bulma-components/blob/master/src/components/panel/components/tabs/components/tab.js
interface PanelTabsTabModifierProps {
  active?: boolean;
}
type PanelTabsTabProps = ElementProps & PanelTabsTabModifierProps;
declare const PanelTabsTab: React.FunctionComponent<PanelTabsTabProps>;

/*** Progress ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/progress/progress.js
interface ProgressModifierProps {
  color?: Color;
  max?: number;
  size?: Size;
  value?: number;
}
interface ProgressProps
  extends ElementProps,
    ProgressModifierProps,
    Partial<Omit<React.ComponentProps<'progress'>, 'color' | 'max' | 'value' | 'unselectable'>> {}
declare const Progress: React.FunctionComponent<ProgressProps>;

/*** Section ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/section/section.js
interface SectionModifierProps {
  size?: 'medium' | 'large';
}
interface SectionProps extends ElementProps, SectionModifierProps {}
declare const Section: React.FunctionComponent<SectionProps>;

/*** Table ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/table/table.js
interface TableModifierProps {
  bordered?: boolean;
  size?: 'fullwidth' | 'narrow';
  striped?: boolean;
}
interface TableProps
  extends ElementProps,
    TableModifierProps,
    Partial<Omit<React.ComponentProps<'table'>, 'unselectable'>> {}
declare const Table: React.FunctionComponent<TableProps>;

/*** Tabs ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/tabs/tabs.js
interface TabsModifierProps {
  align?: 'centered' | 'right';
  fullwidth?: 'boolean';
  size?: Size;
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
}
interface TabsProps extends ElementProps, TabsModifierProps {}
interface Tabs extends React.FunctionComponent<TabsProps> {
  Tab: typeof TabsTab;
}
declare const Tabs: Tabs;

// https://github.com/couds/react-bulma-components/blob/master/src/components/tabs/components/tab.js
interface TabsTabModifierProps {
  active?: boolean;
}
interface TabsTabProps extends ElementProps, TabsTabModifierProps {}
declare const TabsTab: React.FunctionComponent<TabsTabProps>;

/*** Tag ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/tag/tag.js
interface TagModifierProps {
  color?: Color;
  remove?: boolean;
  rounded?: boolean;
  size?: 'medium' | 'large';
}
interface TagProps extends ElementProps, TagModifierProps {}
interface Tag extends React.FunctionComponent<TagProps> {
  Group: typeof TagGroup;
}
declare const Tag: Tag;

// https://github.com/couds/react-bulma-components/blob/master/src/components/tag/components/tag-group.js
interface TagGroupModifierProps {
  gapless?: boolean;
}
interface TagGroupProps
  extends ElementProps,
    TagGroupModifierProps,
    Partial<Omit<React.ComponentProps<'span'>, 'unselectable'>> {}
declare const TagGroup: React.FunctionComponent<TagGroupProps>;

/*** Tile ***/
// https://github.com/couds/react-bulma-components/blob/master/src/components/tile/tile.js
interface TileModifierProps {
  color?: Color;
  context?: 'ancestor' | 'parent' | 'child';
  notification?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  vertical?: boolean;
}
interface TileProps extends ElementProps, TileModifierProps {}
declare const Tile: React.FunctionComponent<TileProps>;

export {
  Box,
  Breadcrumb,
  Button,
  Card,
  Columns,
  Container,
  Content,
  Dropdown,
  Element,
  Footer,
  Form,
  Heading,
  Hero,
  Icon,
  Image,
  Level,
  Loader,
  Media,
  Menu,
  Message,
  Modal,
  Navbar,
  Notification,
  Pagination,
  Panel,
  Progress,
  Section,
  Table,
  Tabs,
  Tag,
  Tile
};

export {
  BoxProps,
  BreadcrumbProps,
  ButtonGroupProps,
  ButtonProps,
  CardContentProps,
  CardFooterItemProps,
  CardFooterProps,
  CardHeaderIconProps,
  CardHeaderProps,
  CardHeaderTitleProps,
  CardImageProps,
  CardProps,
  CheckboxProps,
  ColumnProps,
  ColumnsProps,
  ContainerProps,
  ContentProps,
  ControlProps,
  DropdownDividerProps,
  DropdownItemProps,
  DropdownProps,
  FieldBodyProps,
  FieldLabelProps,
  FieldProps,
  FooterProps,
  HeadingProps,
  HelpProps,
  HeroBodyProps,
  HeroFooterProps,
  HeroHeadProps,
  HeroProps,
  IconProps,
  ImageProps,
  InputFileProps,
  InputProps,
  LabelProps,
  LevelItemProps,
  LevelProps,
  LevelSideProps,
  LoaderProps,
  MediaContentProps,
  MediaItemProps,
  MediaProps,
  MenuListItemProps,
  MenuListProps,
  MenuProps,
  MessageBodyProps,
  MessageHeaderProps,
  MessageProps,
  ModalCardBodyProps,
  ModalCardFootProps,
  ModalCardHeadProps,
  ModalCardProps,
  ModalCardTitleProps,
  ModalContentProps,
  ModalProps,
  NavbarBrandProps,
  NavbarBurgerProps,
  NavbarContainerProps,
  NavbarDividerProps,
  NavbarDropdownProps,
  NavbarItemProps,
  NavbarLinkProps,
  NavbarMenuProps,
  NavbarProps,
  NotificationProps,
  PaginationProps,
  PanelBlockProps,
  PanelHeaderProps,
  PanelIconProps,
  PanelProps,
  PanelTabsProps,
  PanelTabsTabProps,
  ProgressProps,
  RadioProps,
  SectionProps,
  SelectProps,
  SwitchProps,
  TableProps,
  TabsProps,
  TabsTabProps,
  TagGroupProps,
  TagProps,
  TextareaProps,
  TileProps
};

// Footnote [0]
// this is horrible but is needed to support `renderAs` with arbitrary components
// the fix for this would be to make (e.g. for Button) Button and ButtonProps generic
// but that won't work unless on TS@next
// This is disabled as it destroys prop type inference and type checking.
