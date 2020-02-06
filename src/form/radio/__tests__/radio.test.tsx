import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Radio } from '../radio';

describe('Radio component', () => {
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(
      <Radio onChange={onChange} name="test">
        Test <a>Give me</a>
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { container } = render(
      <Radio onChange={onChange} name="test" className="other-class this-is-a-test">
        Default
      </Radio>
    );
    const label = container.querySelector('label') as HTMLLabelElement;
    expect(label).toHaveClass('other-class', 'this-is-a-test');
  });

  it('should render unchecked', () => {
    const { container } = render(<Radio onChange={onChange} />);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.checked).toEqual(false);
  });

  it('should use inline styles', () => {
    const { asFragment } = render(
      <Radio onChange={onChange} name="test" style={{ height: 250 }}>
        Default
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be disabled, checked and with value', () => {
    const { container } = render(
      <Radio name="test" value="TEST" onChange={onChange} checked disabled>
        Default
      </Radio>
    );
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toEqual('TEST');
    expect(input.disabled).toEqual(true);
    expect(input.checked).toEqual(true);
  });

  it('should change value on change event', async () => {
    const { container } = render(<Radio onChange={onChange}>Text</Radio>);
    const label = container.querySelector('label') as HTMLLabelElement;
    fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
