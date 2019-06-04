import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from '.';
import { Colors } from '../../../constants';
import { Section } from '../../layout/section';
import { Box } from '../box';
import { ButtonGroup } from './components';

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

const positions = {
  default: '',
  centered: 'centered',
  right: 'right'
};

storiesOf('Button', module)
  .addDecorator(story => <div className="button-display">{story()}</div>)
  .add('Default', () => (
    <Section>
      <Box>Play with the button props using the knobs addon panel at the bottom</Box>
      <Button
        fullwidth={boolean('Full width', false)}
        color={select('Color', colors, 'primary')}
        loading={boolean('Loading', false)}
        outlined={boolean('Outlined', false)}
        inverted={boolean('Inverted', false)}
        disabled={boolean('Disabled', false)}
        text={boolean('Text', false)}
        remove={boolean('Remove', false)}
        inactive={boolean('Static', false)}
        rounded={boolean('Rounded', false)}
        onClick={action('Button Click')}
        onMouseEnter={action('Hover')}
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
      <ButtonGroup hasAddons={boolean('hasAddons', false)} position={select('Position', positions, 'top' as any)}>
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
