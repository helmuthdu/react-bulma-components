import { fireEvent, render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import * as React from 'react';
import { DropdownDivider, DropdownItem } from '../components';
import { Dropdown } from '../dropdown';

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
    const { getByTestId } = render(
      <Dropdown value="value" style={{ width: 400 }} onChange={() => {}}>
        <DropdownItem value="value">Item</DropdownItem>
        <DropdownDivider />
        <DropdownItem value="other">Other</DropdownItem>
      </Dropdown>
    );
    expect(getByTestId('dropdown-container')).not.toHaveClass('is-active');
    fireEvent.click(getByTestId('dropdown-trigger'));
    expect(getByTestId('dropdown-container')).toHaveClass('is-active');
  });

  it('should select the new value', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown hoverable value="" style={{ width: 400 }} onChange={onChange}>
        <DropdownItem data-testid="foo" value="value">
          Foo
        </DropdownItem>
      </Dropdown>
    );
    fireEvent.mouseOver(getByTestId('dropdown-trigger'));
    fireEvent.click(getByTestId('foo'));
    expect(onChange).toHaveBeenCalledWith('value');
  });

  it('should select the new value and close the dropdown', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown value="" style={{ width: 400 }} onChange={onChange}>
        <DropdownItem data-testid="foo" value="value">
          Foo
        </DropdownItem>
      </Dropdown>
    );
    fireEvent.click(getByTestId('dropdown-trigger'));
    fireEvent.click(getByTestId('foo'));
    expect(onChange).toHaveBeenCalledWith('value');
    expect(getByTestId('dropdown-container')).not.toHaveClass('is-active');
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
    const { getByTestId } = render(
      <Dropdown label="test label" value="">
        <DropdownItem value="value">Item</DropdownItem>
      </Dropdown>
    );
    expect(getByTestId('dropdown-trigger')).toHaveTextContent('test label');
  });

  it('should show the label of the dropdown item when value of it is the active value', () => {
    const { getByTestId } = render(
      <Dropdown label="test label" value="value">
        <DropdownItem value="value">Bar</DropdownItem>
      </Dropdown>
    );
    expect(getByTestId('dropdown-trigger')).toHaveTextContent('Bar');
  });
});
