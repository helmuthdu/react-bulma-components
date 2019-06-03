import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Dropdown } from '.';
import { Colors } from '../../../constants';
import { Modifiers } from '../../../modifiers';
import { Container } from '../../layout/container';
import { Section } from '../../layout/section';
import { DropdownDivider, DropdownItem } from './components';

class Wrapper extends React.Component<Partial<Modifiers> & { hoverable?: boolean; color?: Colors }> {
  state = {
    selected: ''
  };
  onChange = selected => {
    this.setState({ selected });
  };

  render() {
    return (
      <Dropdown
        {...this.props}
        value={this.state.selected}
        onChange={this.onChange}
        color="info"
        label={text('label', '')}
      >
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

storiesOf('Dropdown', module)
  .add('Default', () => (
    <Dropdown onChange={action('select')} label={text('label', '')}>
      <DropdownItem value="item">Dropdown item</DropdownItem>
      <DropdownItem value="other">Other Dropdown item</DropdownItem>
      <DropdownItem value="active">Active Dropdown item</DropdownItem>
      <DropdownItem value="other 2">Other Dropdown item</DropdownItem>
      <DropdownDivider />
      <DropdownItem value="divider">With divider</DropdownItem>
    </Dropdown>
  ))
  .add('Hoverable', () => (
    <Dropdown hoverable value="item" label={text('label', '')}>
      <DropdownItem value="item">Dropdown item</DropdownItem>
      <DropdownItem value="other">Other Dropdown item</DropdownItem>
      <DropdownItem value="active">Active Dropdown item</DropdownItem>
      <DropdownItem value="other 2">Other Dropdown item</DropdownItem>
      <DropdownDivider />
      <DropdownItem value="divider">With divider</DropdownItem>
    </Dropdown>
  ))
  .add('Alignment', () => (
    <div>
      <Container>
        <Section size="large">
          <Dropdown
            right={boolean('right (will replace "align" prop)', false)}
            value="item"
            up={boolean('up', false)}
            label={text('label', '')}
          >
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
  ))
  .add('Controlled component', () => <Wrapper />)
  .add('Controlled component Hoverable', () => <Wrapper hoverable color="dark" />);
