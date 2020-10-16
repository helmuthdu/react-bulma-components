import { boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Navbar, NavbarBrand, NavbarBurger, NavbarContainer, NavbarItem, NavbarMenu } from '.';
import { Colors } from '../../constants';
import { Box } from '../../elements/box';
import { Container } from '../../layout/container';

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

export const Default = () => {
  return (
    <Navbar
      color={select('Color', colors, colors.info)}
      fixed={select('Fixed', { default: null, top: 'top', bottom: 'bottom' }, null)}
      active={boolean('Active', false)}
      transparent={boolean('Transparent', false)}>
      <Container>
        <NavbarBrand>
          <NavbarItem>
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
      </Container>
    </Navbar>
  );
};

const story = {
  title: 'Navbar',
  component: Navbar,
  subcomponents: {
    NavbarBrand,
    NavbarBurger,
    NavbarContainer,
    NavbarItem,
    NavbarMenu
  },
  decorators: [
    (Story: any) => (
      <div>
        <Story />
        <Box style={{ margin: '15px auto', maxWidth: '75vw' }}>
          Check the Knows tab to see the behavior of this component
        </Box>
      </div>
    )
  ]
};

export default story;
