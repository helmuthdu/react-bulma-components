import { fireEvent, render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import { Dropdown, DropdownDivider, DropdownItem } from '..';

declare const global: any;

describe('Dropdown component', () => {
  beforeEach(() => {
    global.window = new JSDOM('<body><div id="app-root"></div></body>').window;
  });

  it('should render', () => {
    const { asFragment } = render(
      <Dropdown value="value" onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should add listener do document on mount', () => {
    global.window.document.addEventListener = jest.fn();
    render(
      <Dropdown value="value" onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(window.document.addEventListener).toHaveBeenCalled();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Dropdown value="value" className="other-class" onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have custom inline styles', () => {
    const { asFragment } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have divider', () => {
    const { asFragment } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
        <DropdownDivider />
        <DropdownItem value="other">Other</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be right-aligned when using "right" prop', () => {
    const { asFragment } = render(
      <Dropdown right>
        <DropdownItem value="value">Item</DropdownItem>
        <DropdownItem value="other">Other</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should appear above the dropdown button', () => {
    const { asFragment } = render(
      <Dropdown up>
        <DropdownItem value="value">Item</DropdownItem>
        <DropdownItem value="other">Other</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should open the Dropdown', () => {
    const { container } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
        <DropdownDivider />
        <DropdownItem value="other">Other</DropdownItem>
      </Dropdown>
    );
    const dropdown = container.querySelector('.dropdown') as HTMLDivElement;
    const button = dropdown.querySelector('button') as HTMLButtonElement;
    expect(dropdown).not.toHaveClass('is-active');
    fireEvent.click(button);
    expect(dropdown).toHaveClass('is-active');
  });

  it('should select the new value', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Dropdown hoverable value="" style={{ width: 400 }} onChange={onChange}>
        <DropdownItem value="value">Foo</DropdownItem>
      </Dropdown>
    );
    const dropdownItem = container.querySelector('.dropdown-item') as HTMLDivElement;
    const button = container.querySelector('button') as HTMLButtonElement;
    fireEvent.mouseOver(button);
    fireEvent.click(dropdownItem);
    expect(onChange).toHaveBeenCalledWith('value');
  });

  it('should select the new value and close the dropdown', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Dropdown value="" style={{ width: 400 }} onChange={onChange}>
        <DropdownItem value="value">Foo</DropdownItem>
      </Dropdown>
    );
    const dropdown = container.querySelector('.dropdown') as HTMLDivElement;
    const dropdownItem = container.querySelector('.dropdown-item') as HTMLDivElement;
    const button = container.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    fireEvent.click(dropdownItem);
    expect(onChange).toHaveBeenCalledWith('value');
    expect(dropdown).not.toHaveClass('is-active');
  });

  it('should show custom label passed to the label prop', () => {
    const { asFragment } = render(
      <Dropdown label="test label">
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show the label of the first dropdown item when no custom label is passed', () => {
    const { asFragment } = render(
      <Dropdown>
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show custom label when active valued is undefined/empty', () => {
    const { container } = render(
      <Dropdown label="test label" value="">
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button).toHaveTextContent('test label');
  });

  it('should show the label of the dropdown item when value of it is the active value', () => {
    const { container } = render(
      <Dropdown label="test label" value="value">
        <DropdownItem value="value">Bar</DropdownItem>
      </Dropdown>
    );
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button).toHaveTextContent('Bar');
  });
});
