/// <reference types="node" />
/// <reference types="prop-types" />
/// <reference types="react" />

export declare type Breakpoints = null | 'mobile' | 'tablet' | 'desktop' | 'widescreen' | 'fullhd' | 'touch';
export declare type Colors =
  | null
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
export declare type Greyscale =
  | 'black-bis'
  | 'black-ter'
  | 'grey'
  | 'grey-dark'
  | 'grey-darker'
  | 'grey-light'
  | 'grey-lighter'
  | 'white-bis'
  | 'white-ter';
export declare type Sizes = 'small' | 'medium' | 'large';
export declare type Spacing = 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'horizontal' | 'vertical';
export declare type Scale =
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
export declare type ColorsModifier = {
  backgroundColor?: Colors & Greyscale;
  textColor?: Colors & Greyscale;
};
export declare type HelpersModifier = {
  clearfix?: boolean;
  clipped?: boolean;
  hidden?: boolean;
  invisible?: boolean;
  marginless?: boolean;
  overlay?: boolean;
  paddingless?: boolean;
  pull?: 'right' | 'left';
  radiusless?: boolean;
  relative?: boolean;
  scrolless?: boolean;
  shadowless?: boolean;
  unselectable?: boolean;
};
export declare type SizeShape = {
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
};
export declare type ResponsiveModifier = {
  responsive?: {
    mobile?: SizeShape;
    tablet?: SizeShape;
    desktop?: SizeShape;
    widescreen?: SizeShape;
    fullhd?: SizeShape;
    touch?: SizeShape;
  };
};
export declare type SpacingModifier = {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingLeft?: Spacing;
  paddingBottom?: Spacing;
  paddingRight?: Spacing;
  margin?: Spacing;
  marginTop?: Spacing;
  marginLeft?: Spacing;
  marginBottom?: Spacing;
  marginRight?: Spacing;
};
export declare type TypographyModifier = {
  textSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  textAlignment?: 'centered' | 'justified' | 'left' | 'right';
  textTransform?: 'capitalized' | 'lowercase' | 'uppercase';
  textWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  italic?: boolean;
};
export declare type ElementModifier = ColorsModifier &
  HelpersModifier &
  ResponsiveModifier &
  SpacingModifier &
  TypographyModifier & {
    className?: any;
    children?: React.ReactNode;
    renderAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    style?: React.CSSProperties;
  };
export declare type ColumnValue =
  | Sizes
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
export declare type ColumnSize = {
  narrow?: boolean;
  offset?: ColumnValue;
  size?: ColumnValue;
};
export declare type ColumnProps = ElementModifier &
  ColumnSize & {
    mobile?: ColumnSize;
    tablet?: ColumnSize;
    touch?: ColumnSize;
    desktop?: ColumnSize;
    widescreen?: ColumnSize;
    fullhd?: ColumnSize;
  };
export declare const Column: React.FunctionComponent<ColumnProps>;
export declare type ColumnsProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    breakpoint?: Breakpoints;
    centered?: boolean;
    gapless?: boolean;
    multiline?: boolean;
    vcentered?: boolean;
  };
export declare const Columns: React.FunctionComponent<ColumnsProps> & {
  Column: typeof Column;
};
export declare type BreadcrumbProps = Partial<Omit<React.ComponentProps<'a'>, 'unselectable'>> &
  ElementModifier & {
    align?: 'right' | 'center';
    hrefAttr?: string;
    items?: {
      active?: boolean;
      name?: React.ReactNode;
      url: string;
    }[];
    renderAs?: 'a' | ((...args: any[]) => any);
    separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    size?: Sizes;
  };
export declare const Breadcrumb: React.FunctionComponent<BreadcrumbProps>;
export declare type CardFooterItemProps = ElementModifier;
export declare const CardFooterItem: React.FunctionComponent<CardFooterItemProps>;
export declare type CardFooterProps = ElementModifier;
export declare const CardFooter: React.FunctionComponent<CardFooterProps> & {
  Item: typeof CardFooterItem;
};
export declare type CardHeaderIconProps = ElementModifier;
export declare const CardHeaderIcon: React.FunctionComponent<CardHeaderIconProps>;
export declare type CardHeaderTitleProps = ElementModifier;
export declare const CardHeaderTitle: React.FunctionComponent<CardHeaderTitleProps>;
export declare type CardHeaderProps = ElementModifier;
export declare const CardHeader: React.FunctionComponent<CardHeaderProps> & {
  Icon: typeof CardHeaderIcon;
  Title: typeof CardHeaderTitle;
};
export declare type CardContentProps = ElementModifier;
export declare const CardContent: React.FunctionComponent<CardContentProps>;
export declare type BoxProps = ElementModifier;
export declare const Box: React.FunctionComponent<BoxProps>;
export declare type ButtonGroupProps = ElementModifier & {
  hasAddons?: boolean;
  position?: 'centered' | 'right';
  size?: Sizes;
};
export declare const ButtonGroup: React.FunctionComponent<ButtonGroupProps>;
export declare type ButtonProps = Partial<
  Omit<React.ComponentProps<'a' | 'button' | 'span'>, 'color' | 'unselectable'>
> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    fullwidth?: boolean;
    inactive?: boolean;
    inverted?: boolean;
    link?: boolean;
    loading?: boolean;
    onClick?: (...args: any[]) => void;
    onChange?: (...args: any[]) => void;
    onMouseEnter?: (...args: any[]) => void;
    outlined?: boolean;
    remove?: boolean;
    renderAs?: ('a' | 'button' | 'span') | ((...args: any[]) => any);
    reset?: boolean;
    rounded?: boolean;
    selected?: boolean;
    size?: Sizes | 'normal';
    state?: 'hover' | 'focus' | 'active' | 'loading';
    submit?: boolean;
    text?: boolean;
    type?: string;
  };
export declare const Button: React.FunctionComponent<ButtonProps>;
export declare type ContentProps = ElementModifier & {
  size?: Sizes;
  type?: 'is-lower-alpha' | 'is-lower-roman' | 'is-upper-alpha' | 'is-upper-roman';
};
export declare const Content: React.FunctionComponent<ContentProps>;
export declare type ElementProps = ElementModifier & {
  max?: string | number;
  min?: string | number;
  value?: string | number | string[];
  title?: string;
};
export declare const Element: React.FunctionComponent<ElementProps>;
export declare type HeadingProps = ElementModifier & {
  heading?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  spaced?: boolean;
  subtitle?: boolean;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
};
export declare const Heading: React.FunctionComponent<HeadingProps>;
export declare type IconProps = Partial<Omit<React.ComponentProps<'i'>, 'color' | 'unselectable'>> &
  ElementModifier & {
    align?: 'left' | 'right';
    border?: boolean;
    color?: Colors;
    icon?: string;
    inactive?: boolean;
    pack?: 'mdi' | 'fas';
    size?: 'small' | 'normal' | 'medium' | 'large';
    type?: 'light' | 'dark';
    spinner?: boolean;
  };
export declare const Icon: React.FunctionComponent<IconProps>;
export declare type ImageProps = Partial<Omit<React.ComponentProps<'figure'>, 'unselectable'>> &
  ElementModifier & {
    alt?: string;
    fallback?: string;
    rounded?: boolean;
    size?: Scale;
    src?: string;
  };
export declare const Image: React.FunctionComponent<ImageProps>;
export declare type NotificationProps = ElementModifier & {
  color?: Colors;
};
export declare const Notification: React.FunctionComponent<NotificationProps>;
export declare type ProgressProps = Partial<
  Omit<React.ComponentProps<'progress'>, 'color' | 'max' | 'value' | 'unselectable'>
> &
  ElementModifier & {
    color?: Colors;
    max?: number;
    size?: Sizes;
    value?: number;
  };
export declare const Progress: React.FunctionComponent<ProgressProps>;
export declare type TableProps = Partial<Omit<React.ComponentProps<'table'>, 'unselectable'>> &
  ElementModifier & {
    bordered?: boolean;
    fullwidth?: boolean;
    hoverable?: boolean;
    narrow?: boolean;
    striped?: boolean;
  };
export declare const Table: React.FunctionComponent<TableProps>;
export declare type TagProps = ElementModifier & {
  close?: boolean;
  color?: Colors;
  ellipsis?: boolean;
  onClick?: (...args: any[]) => any;
  remove?: boolean;
  rounded?: boolean;
  size?: 'medium' | 'large';
};
export declare const Tag: React.FunctionComponent<TagProps>;
export declare type TagsProps = Partial<Omit<React.ComponentProps<'span'>, 'unselectable'>> &
  ElementModifier & {
    gapless?: boolean;
    size?: 'medium' | 'large';
  };
export declare const Tags: React.FunctionComponent<TagsProps> & {
  Tag: typeof Tag;
};
export declare type CardImageProps = ElementModifier & ImageProps;
export declare const CardImage: React.FunctionComponent<CardImageProps>;
export declare type CardProps = ElementModifier;
export declare const Card: React.FunctionComponent<CardProps> & {
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Header: typeof CardHeader;
  Image: typeof CardImage;
};
export declare type DropdownProps = Partial<Omit<React.ComponentProps<'div'>, 'color' | 'onChange' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    hoverable?: boolean;
    label?: React.ReactNode;
    onChange?: (...args: any[]) => void;
    right?: boolean;
    up?: boolean;
    value?: any;
  };
export declare const Dropdown: React.FunctionComponent<DropdownProps>;
export declare type DropdownDividerProps = Partial<Omit<React.ComponentProps<'hr'>, 'unselectable'>> & ElementModifier;
export declare const DropdownDivider: React.FunctionComponent<DropdownDividerProps>;
export declare type DropdownItemProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    active?: boolean;
    onClick?: (...args: any[]) => void;
    value: any;
  };
export declare const DropdownItem: React.FunctionComponent<DropdownItemProps>;
export declare type LoaderProps = ElementModifier & {
  onClick?: (...args: any[]) => any;
};
export declare const Loader: React.FunctionComponent<LoaderProps>;
export declare type MenuListItemProps = ElementModifier & {
  active?: boolean;
};
export declare const MenuListItem: React.FunctionComponent<MenuListItemProps>;
export declare type MenuListProps = Partial<Omit<React.ComponentProps<'ul'>, 'unselectable'>> &
  ElementModifier & {
    title?: string;
  };
export declare const MenuList: React.FunctionComponent<MenuListProps> & {
  Item: typeof MenuListItem;
};
export declare type MenuProps = ElementModifier;
export declare const Menu: React.FunctionComponent<MenuProps> & {
  List: typeof MenuList;
};
export declare type MessageBodyProps = ElementModifier;
export declare const MessageBody: React.FunctionComponent<MessageBodyProps>;
export declare type MessageHeaderProps = ElementModifier;
export declare const MessageHeader: React.FunctionComponent<MessageHeaderProps>;
export declare type MessageProps = ElementModifier & {
  color?: Colors;
  size?: Sizes;
};
export declare const Message: React.FunctionComponent<MessageProps> & {
  Body: typeof MessageBody;
  Header: typeof MessageHeader;
};
export declare type ModalCardProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    onClose?: (...args: any[]) => any;
  };
export declare const ModalCard: React.FunctionComponent<ModalCardProps>;
export declare type ModalCardBodyProps = ElementModifier;
export declare const ModalCardBody: React.FunctionComponent<ModalCardBodyProps>;
export declare type ModalCardFootProps = Partial<Omit<React.ComponentProps<'footer'>, 'unselectable'>> &
  ElementModifier;
export declare const ModalCardFooter: React.FunctionComponent<ModalCardFootProps>;
export declare type ModalCardHeadProps = Partial<Omit<React.ComponentProps<'header'>, 'unselectable'>> &
  ElementModifier & {
    onClose?: () => void;
  };
export declare const ModalCardHeader: React.FunctionComponent<ModalCardHeadProps>;
export declare type ModalCardTitleProps = Partial<Omit<React.ComponentProps<'span'>, 'unselectable'>> & ElementModifier;
export declare const ModalCardTitle: React.FunctionComponent<ModalCardTitleProps>;
export declare type ModalContentProps = ElementModifier;
export declare const ModalContent: React.FunctionComponent<ModalContentProps>;
export declare type ModalProps = ElementModifier & {
  show: boolean;
  onClose: (...args: any[]) => any;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
};
export declare const Modal: React.FunctionComponent<ModalProps> & {
  Card: typeof ModalCard;
  Content: typeof ModalContent;
};
export declare type NavbarBrandProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> & ElementModifier;
export declare const NavbarBrand: React.FunctionComponent<NavbarBrandProps>;
export declare type NavbarBurgerProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    onClick?: (...args: any[]) => void;
  };
export declare const NavbarBurger: React.FunctionComponent<NavbarBurgerProps>;
export declare type NavbarContainerProps = ElementModifier & {
  position?: 'start' | 'end';
};
export declare const NavbarContainer: React.FunctionComponent<NavbarContainerProps>;
export declare type NavbarDividerProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> & ElementModifier;
export declare const NavbarDivider: React.FunctionComponent<NavbarDividerProps>;
export declare type NavbarDropdownProps = ElementModifier & {
  boxed?: boolean;
  right?: boolean;
};
export declare const NavbarDropdown: React.FunctionComponent<NavbarDropdownProps>;
export declare type NavbarItemProps = ElementModifier & {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
};
export declare const NavbarItem: React.FunctionComponent<NavbarItemProps>;
export declare type NavbarLinkProps = ElementModifier;
export declare const NavbarLink: React.FunctionComponent<NavbarLinkProps>;
export declare type NavbarMenuProps = ElementModifier;
export declare const NavbarMenu: React.FunctionComponent<NavbarMenuProps>;
export declare type NavbarProps = ElementModifier & {
  active?: boolean;
  color?: Colors;
  fixed?: null | 'top' | 'bottom';
  transparent?: boolean;
};
export declare const Navbar: React.FunctionComponent<NavbarProps> & {
  Brand: typeof NavbarBrand;
  Burger: typeof NavbarBurger;
  Container: typeof NavbarContainer;
  Divider: typeof NavbarDivider;
  Dropdown: typeof NavbarDropdown;
  Item: typeof NavbarItem;
  Link: typeof NavbarLink;
  Menu: typeof NavbarMenu;
};
export declare type PaginationProps = Partial<Omit<React.ComponentProps<'nav'>, 'onChange' | 'unselectable'>> &
  ElementModifier & {
    autoHide?: boolean;
    current?: number;
    delta?: number;
    next?: React.ReactNode;
    onChange?: (...args: any[]) => void;
    position?: 'centered' | 'right';
    previous?: React.ReactNode;
    rounded?: boolean;
    showPrevNext?: boolean;
    size?: Sizes;
    total?: number;
  };
export declare const Pagination: React.FunctionComponent<PaginationProps>;
export declare type PanelBlockProps = ElementModifier & {
  active?: boolean;
};
export declare const PanelBlock: React.FunctionComponent<PanelBlockProps>;
export declare type PanelHeaderProps = ElementModifier;
export declare const PanelHeader: React.FunctionComponent<PanelHeaderProps>;
export declare type PanelIconProps = ElementModifier & {
  icon?: string;
};
export declare const PanelIcon: React.FunctionComponent<PanelIconProps>;
export declare type PanelTabsTabProps = ElementModifier & {
  active?: boolean;
};
export declare const PanelTab: React.FunctionComponent<PanelTabsTabProps>;
export declare type PanelTabsProps = ElementModifier;
export declare const PanelTabs: React.FunctionComponent<PanelTabsProps> & {
  Tab: typeof PanelTab;
};
export declare type PanelProps = ElementModifier;
export declare const Panel: React.FunctionComponent<PanelProps> & {
  Block: typeof PanelBlock;
  Header: typeof PanelHeader;
  Icon: typeof PanelIcon;
  Tabs: typeof PanelTabs;
};
export declare type TabProps = ElementModifier & {
  active?: boolean;
};
export declare const Tab: React.FunctionComponent<TabProps>;
export declare type TabsProps = ElementModifier & {
  align?: null | 'centered' | 'right';
  fullwidth?: boolean;
  size?: Sizes;
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
};
export declare const Tabs: React.FunctionComponent<TabsProps> & {
  Tab: typeof Tab;
};
export declare type CheckboxProps = Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> &
  ElementModifier & {
    checked?: boolean;
    color?: Colors;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    size?: Sizes;
    value?: string | number;
  };
export declare const Checkbox: React.FunctionComponent<CheckboxProps>;
export declare type ControlProps = ElementModifier & {
  fullwidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: Sizes;
};
export declare const Control: React.FunctionComponent<ControlProps>;
export declare type FieldBodyProps = ElementModifier;
export declare const FieldBody: React.FunctionComponent<FieldBodyProps>;
export declare type FieldLabelProps = ElementModifier & {
  size?: 'normal' | Sizes;
};
export declare const FieldLabel: React.FunctionComponent<FieldLabelProps>;
export declare type FieldProps = ElementModifier & {
  align?: 'centered' | 'right';
  context?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
};
export declare const Field: React.FunctionComponent<FieldProps> & {
  Body: typeof FieldBody;
  Label: typeof FieldLabel;
};
export declare type HelpProps = Partial<Omit<React.ComponentProps<'span'>, 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
  };
export declare const Help: React.FunctionComponent<HelpProps>;
export declare type InputProps = Partial<Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    inactive?: boolean;
    name?: string;
    placeholder?: string;
    onChange: (...args: any[]) => void;
    readOnly?: boolean;
    size?: Sizes;
    type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search' | 'color' | 'date' | 'time' | 'datetime-local';
    value?: string | number;
  };
export declare const Input: React.FunctionComponent<InputProps>;
export declare type InputFileProps = Partial<Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable'>> &
  ElementModifier & {
    accept?: string;
    boxed?: boolean;
    capture?: string;
    color?: Colors;
    fullwidth?: boolean;
    hasName?: boolean;
    icon?: React.ReactElement<any>;
    label?: string;
    multiple?: boolean;
    name?: string;
    onChange?: (...args: any[]) => void;
    right?: boolean;
    size?: Sizes;
  };
export declare const InputFile: React.FunctionComponent<InputFileProps>;
export declare type LabelProps = Partial<Omit<React.ComponentProps<'label'>, 'unselectable'>> &
  ElementModifier & {
    size?: Sizes;
  };
export declare const Label: React.FunctionComponent<LabelProps>;
export declare type RadioProps = Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> &
  ElementModifier & {
    checked?: boolean;
    color?: Colors;
    disabled?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    size?: Sizes;
    value?: string | number;
  };
export declare const Radio: React.FunctionComponent<RadioProps>;
export declare type SelectProps = Partial<Omit<React.ComponentProps<'select'>, 'size' | 'color' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    empty?: boolean;
    loading?: boolean;
    multiple?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    readOnly?: boolean;
    rounded?: boolean;
    size?: Sizes;
    value?: string | number | any[];
  };
export declare const Select: React.FunctionComponent<SelectProps>;
export declare type SwitchProps = Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> &
  ElementModifier & {
    checked?: boolean;
    color?: Colors;
    disabled?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    size?: Sizes;
    value?: string | number;
  };
export declare const Switch: React.FunctionComponent<SwitchProps>;
export declare type TextareaProps = Partial<Omit<React.ComponentProps<'textarea'>, 'color' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    placeholder?: string;
    readOnly?: boolean;
    rows?: number;
    size?: Sizes;
    value?: string | number;
  };
export declare const Textarea: React.FunctionComponent<TextareaProps>;
export declare type ContainerProps = ElementModifier & {
  breakpoint?: Breakpoints;
  fluid?: boolean;
};
export declare const Container: React.FunctionComponent<ContainerProps>;
export declare type FooterProps = ElementModifier;
export declare const Footer: React.FunctionComponent<FooterProps>;
export declare type HeroProps = ElementModifier & {
  color?: Colors;
  gradient?: boolean;
  size?: 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';
};
export declare const Hero: React.FunctionComponent<HeroProps>;
export declare type HeroBodyProps = ElementModifier;
export declare const HeroBody: React.FunctionComponent<HeroBodyProps>;
export declare type HeroFooterProps = ElementModifier;
export declare const HeroFooter: React.FunctionComponent<HeroFooterProps>;
export declare type HeroHeadProps = ElementModifier;
export declare const HeroHeader: React.FunctionComponent<HeroHeadProps>;
export declare type LevelProps = ElementModifier & {
  breakpoint?: Breakpoints;
};
export declare const Level: React.FunctionComponent<LevelProps>;
export declare type LevelItemProps = ElementModifier;
export declare const LevelItem: React.FunctionComponent<LevelItemProps>;
export declare type LevelSideProps = ElementModifier & {
  align?: 'left' | 'right';
};
export declare const LevelSide: React.FunctionComponent<LevelSideProps>;
export declare type MediaProps = ElementModifier;
export declare const Media: React.FunctionComponent<MediaProps>;
export declare type MediaContentProps = ElementModifier;
export declare const MediaContent: React.FunctionComponent<MediaContentProps>;
export declare type MediaItemProps = ElementModifier & {
  position?: 'center' | 'right' | 'left';
};
export declare const MediaItem: React.FunctionComponent<MediaItemProps>;
export declare type SectionProps = ElementModifier & {
  size?: 'medium' | 'large';
};
export declare const Section: React.FunctionComponent<SectionProps>;
export declare type TileProps = ElementModifier & {
  color?: Colors;
  context?: 'ancestor' | 'parent' | 'child';
  notification?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  vertical?: boolean;
};
export declare const Tile: React.FunctionComponent<TileProps>;
