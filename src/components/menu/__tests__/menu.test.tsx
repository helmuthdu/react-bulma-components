import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Menu, MenuList, MenuListItem } from '..';

describe('Menu component', () => {
  // @ts-ignore
  it.each([[Menu], [MenuList], [MenuListItem]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have render all', () => {
    const { asFragment } = render(
      <Menu>
        <MenuList title="General">
          <MenuListItem>Dashboard</MenuListItem>
          <MenuListItem>Customer</MenuListItem>
        </MenuList>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat MenuList to display as submenus', () => {
    const { asFragment } = render(
      <Menu>
        <MenuList title="General">
          <MenuListItem>Dashboard</MenuListItem>
          <MenuListItem>
            <MenuListItem active>
              <MenuList title="Manage Your Team">
                <MenuListItem>Members</MenuListItem>
                <MenuListItem active>Plugins</MenuListItem>
                <MenuListItem>Add a member</MenuListItem>
              </MenuList>
            </MenuListItem>
          </MenuListItem>
        </MenuList>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component with different tag', () => {
    const Custom = (props: any) => (
      <span {...props}>
        Custom
        {props.children}
      </span>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(
      <Menu>
        <MenuList title="General">
          <MenuListItem as={Custom}>Dashboard</MenuListItem>
          <MenuListItem as={Custom}>Customer</MenuListItem>
        </MenuList>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render custom item child', () => {
    const { asFragment } = render(
      <Menu>
        <MenuList title="General">
          <MenuListItem>
            <h1>Custom children 1</h1>
          </MenuListItem>
          <MenuListItem>
            <span>Custom children 2</span>
          </MenuListItem>
        </MenuList>
      </Menu>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
