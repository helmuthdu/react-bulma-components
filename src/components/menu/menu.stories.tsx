import * as React from 'react';
import { Menu, MenuList, MenuListItem } from '.';

export const Default = () => (
  <Menu>
    <MenuList title="General">
      <MenuListItem>Dashboard</MenuListItem>
      <MenuListItem>Customer</MenuListItem>
    </MenuList>
    <MenuList title="Administration">
      <MenuListItem>Team Settings</MenuListItem>
      <MenuListItem active>
        <MenuList title="Manage Your Team">
          <MenuListItem>Members</MenuListItem>
          <MenuListItem active>Plugins</MenuListItem>
          <MenuListItem>Add a member</MenuListItem>
        </MenuList>
      </MenuListItem>
      <MenuListItem>Invitations</MenuListItem>
      <MenuListItem>Cloud Storage Environment Settings</MenuListItem>
      <MenuListItem>Authentication</MenuListItem>
    </MenuList>
    <MenuList title="Transactions">
      <MenuListItem>Payments</MenuListItem>
      <MenuListItem>Transfers</MenuListItem>
      <MenuListItem>Balance</MenuListItem>
    </MenuList>
  </Menu>
);

export default {
  title: 'Menu',
  component: Menu,
  subcomponents: {
    MenuListItem
  }
};
