/* eslint-disable react/no-multi-comp, react/prop-types */
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Navbar, NavbarBrand, NavbarBurger, NavbarContainer, NavbarItem, NavbarMenu } from '.';
import { Colors } from '../../../constants';
import { Box } from '../../elements/box';

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

storiesOf('Navbar', module)
  .addDecorator(story => (
    <div>
      {story()}
      <Box style={{ margin: '15px auto', maxWidth: '75vw' }}>
        Check the Know tab to see the behavior of this component
      </Box>
    </div>
  ))
  .add('Default', () => {
    return (
      <Navbar
        color={select('Color', colors, colors.primary)}
        fixed={select('Fixed', { default: null, top: 'top', bottom: 'bottom' }, null)}
        active={boolean('Active', false)}
        transparent={boolean('Transparent', false)}
      >
        <NavbarBrand>
          <NavbarItem renderAs="a">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </NavbarItem>
          <NavbarBurger />
        </NavbarBrand>
        <NavbarMenu>
          <NavbarContainer>
            <NavbarItem>Second</NavbarItem>
          </NavbarContainer>
          <NavbarContainer position="end">
            <NavbarItem>At the end</NavbarItem>
          </NavbarContainer>
        </NavbarMenu>
      </Navbar>
    );
  });
