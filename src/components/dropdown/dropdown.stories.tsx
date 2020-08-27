import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Dropdown, DropdownDivider, DropdownItem } from '.';
import { Colors } from '../../constants';
import { Container } from '../../layout/container';
import { Section } from '../../layout/section';
import { ElementModifier } from '../../modifiers';

type WrapperProps = ElementModifier & { hoverable?: boolean; color?: Colors };

class Wrapper extends React.Component<WrapperProps> {
  state = {
    selected: ''
  };

  onChange = (selected: string) => {
    this.setState({ selected });
  };

  render() {
    return (
      <Dropdown {...this.props} value={this.state.selected} onChange={this.onChange} color="info">
        <DropdownItem value="item">Dropdown item</DropdownItem>
        <DropdownItem value="other">Other Dropdown item</DropdownItem>
        <DropdownItem value="active">Active Dropdown item</DropdownItem>
        <DropdownItem value="other 2">Other Dropdown item</DropdownItem>
        <DropdownDivider />
        <DropdownItem value="divider">With divider</DropdownItem>
      </Dropdown>
    );
  }
}

export const Default = (args: any) => (
  <Dropdown onChange={action('select')} {...args}>
    <DropdownItem value="item">Dropdown item</DropdownItem>
    <DropdownItem value="other">Other Dropdown item</DropdownItem>
    <DropdownItem value="active">Active Dropdown item</DropdownItem>
    <DropdownItem value="other 2">Other Dropdown item</DropdownItem>
    <DropdownDivider />
    <DropdownItem value="divider">With divider</DropdownItem>
  </Dropdown>
);

export const Hoverable = (args: any) => (
  <Dropdown hoverable {...args}>
    <DropdownItem value="item">Dropdown item</DropdownItem>
    <DropdownItem value="other">Other Dropdown item</DropdownItem>
    <DropdownItem value="active">Active Dropdown item</DropdownItem>
    <DropdownItem value="other 2">Other Dropdown item</DropdownItem>
    <DropdownDivider />
    <DropdownItem value="divider">With divider</DropdownItem>
  </Dropdown>
);

export const Alignment = (args: any) => (
  <div>
    <Container>
      <Section size="large">
        <Dropdown {...args}>
          <DropdownItem value="item">Dropdown item</DropdownItem>
          <DropdownItem value="other">Other Dropdown item</DropdownItem>
          <DropdownItem value="active">Active Dropdown item</DropdownItem>
          <DropdownItem value="other 2">Other Dropdown item</DropdownItem>
          <DropdownDivider />
          <DropdownItem value="divider">With divider</DropdownItem>
        </Dropdown>
      </Section>
    </Container>
  </div>
);

export const ControlledComponent = (args: any) => <Wrapper {...args} />;

export const ControlledComponentHoverable = (args: any) => <Wrapper hoverable color="dark" {...args} />;

export default {
  title: 'Dropdown',
  component: Dropdown,
  subcomponents: {
    DropdownDivider,
    DropdownItem
  },
  args: {
    label: '',
    value: 'item',
    up: false,
    right: false
  }
};
