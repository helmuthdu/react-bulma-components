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
    const { asFragment } = render(
      <Radio onChange={onChange} name="test" className="other-class this-is-a-test">
        Default
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
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
    const { asFragment } = render(
      <Radio name="test" value="TEST" onChange={onChange} checked disabled>
        Default
      </Radio>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should set input checked if checked', () => {
    const { getByTestId } = render(<Radio onChange={onChange} checked />);
    expect(getByTestId('radio-input')).toHaveAttribute('checked', '');
  });

  it('should change value on change event', () => {
    const { getByTestId } = render(<Radio onChange={onChange}>Text</Radio>);
    fireEvent.click(getByTestId('radio-label'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
