import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Checkbox } from '../checkbox';

describe('Checkbox component', () => {
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(<Checkbox onChange={onChange}>Text</Checkbox>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { container } = render(
      <Checkbox onChange={onChange} name="test" className="other-class this-is-a-test">
        Default
      </Checkbox>
    );
    const label = container.querySelector('label') as HTMLLabelElement;
    expect(label).toHaveClass('other-class', 'this-is-a-test');
  });

  it('should render unchecked', () => {
    const { container } = render(<Checkbox onChange={onChange} />);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.checked).toEqual(false);
  });

  it('should be disabled, checked and with value', () => {
    const { container } = render(<Checkbox name="test" value="TEST" onChange={onChange} checked disabled />);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toEqual('TEST');
    expect(input.disabled).toEqual(true);
    expect(input.checked).toEqual(true);
  });

  it('should change value on change event', () => {
    const { container } = render(<Checkbox onChange={onChange}>Text</Checkbox>);
    const label = container.querySelector('label') as HTMLLabelElement;
    fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
