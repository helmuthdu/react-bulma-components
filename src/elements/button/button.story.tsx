import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Button, ButtonGroup } from '.';
import { Colors, Sizes } from '../../constants';
import { Section } from '../../layout/section';
import { Box } from '../box';

const colors: { [key: string]: Colors } = {
  primary: 'primary',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  white: 'white',
  black: 'black',
  light: 'light',
  dark: 'dark',
  link: 'link'
};

const positions: { [key: string]: any } = {
  default: null,
  centered: 'centered',
  right: 'right'
};

const size: { [key: string]: Sizes | 'normal' } = {
  small: 'small',
  normal: 'normal',
  medium: 'medium',
  large: 'large'
};

storiesOf('Button', module)
  .addDecorator(story => <div className="button-display">{story()}</div>)
  .add('Default', () => (
    <Section>
      <Box>Play with the button props using the knobs addon panel at the bottom</Box>
      <Button
        color={select('Color', colors, 'primary')}
        disabled={boolean('Disabled', false)}
        fullwidth={boolean('Full width', false)}
        inactive={boolean('Static', false)}
        inverted={boolean('Inverted', false)}
        loading={boolean('Loading', false)}
        onClick={action('Button Click')}
        onMouseEnter={action('Hover')}
        outlined={boolean('Outlined', false)}
        remove={boolean('Remove', false)}
        rounded={boolean('Rounded', false)}
        size={select('Size', size, 'normal')}
        text={boolean('Text', false)}
      >
        Button
      </Button>
    </Section>
  ))
  .add('As another React element', () => {
    const CustomComponent = ({ customProp, children, className }: any) => (
      <a className={className} href={customProp}>
        {children}
      </a>
    );

    CustomComponent.propTypes = {
      customProp: PropTypes.string.isRequired,
      className: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired
    };

    return (
      <Section>
        <Button color="info" renderAs={CustomComponent}>
          Button rendered using another React Component with props
        </Button>
      </Section>
    );
  })
  .add('Button group', () => (
    <Section>
      <ButtonGroup hasAddons={boolean('hasAddons', false)} position={select('Position', positions, undefined)}>
        <Button renderAs="span" color="success">
          Save changes
        </Button>
        <Button renderAs="span" color="info">
          Save and continue
        </Button>
        <Button renderAs="span" color="danger">
          Cancel
        </Button>
      </ButtonGroup>
    </Section>
  ));
