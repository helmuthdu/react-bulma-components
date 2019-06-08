import { render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarContainer,
  NavbarDivider,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu
} from '..';

declare const global: any;

describe('Navbar component', () => {
  beforeEach(() => {
    // eslint-disable-next-line
    window = new JSDOM('<!doctype html><html><body><div id="app-root"></div></body></html>').window;

    global.window = window;
    global.document = window.document;
    global.navigator = {
      userAgent: 'node.js'
    };
  });

  it.each([
    [Navbar],
    [NavbarBrand],
    [NavbarBurger],
    [NavbarContainer],
    [NavbarDivider],
    [NavbarDropdown],
    [NavbarItem],
    [NavbarLink],
    [NavbarMenu]
    // @ts-ignore
  ])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have Navbar classname', () => {
    const { asFragment, unmount } = render(
      <Navbar>
        <NavbarBrand>
          <NavbarItem as="a">
            <img src="/" alt="" />
          </NavbarItem>
          <NavbarBurger className="trigger-menu" />
        </NavbarBrand>
        <div>TEST</div>
        <NavbarMenu>
          <NavbarContainer>
            <NavbarItem dropdown hoverable>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown boxed>
                <NavbarItem>Home</NavbarItem>
                <NavbarDivider />
                <NavbarItem>Home</NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarContainer>
        </NavbarMenu>
      </Navbar>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should concat Bulma class with classes in props', () => {
    const { asFragment, unmount } = render(<Navbar className="other-class test" />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should render as an html section', () => {
    const { asFragment, unmount } = render(<Navbar as="section" />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should have custom inline styles', () => {
    const { asFragment, unmount } = render(<Navbar style={{ width: 200, zIndex: 1 }} />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should be fixed on top', () => {
    const { asFragment, unmount } = render(<Navbar fixed="top" />);
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
