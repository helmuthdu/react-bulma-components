import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Switch } from '../switch';

describe('Switch component', () => {
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(<Switch onChange={onChange}>Text</Switch>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have info color classname', () => {
    const { asFragment } = render(
      <Switch onChange={onChange} color="info">
        Text
      </Switch>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have medium classname', () => {
    const { asFragment } = render(
      <Switch onChange={onChange} size="medium">
        Text
      </Switch>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be disabled', () => {
    const { asFragment } = render(
      <Switch onChange={onChange} disabled>
        Text
      </Switch>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be elastic', () => {
    const { getByText, container } = render(<Switch onChange={onChange}>Text</Switch>);
    const span = container.querySelector('span');
    fireEvent.mouseDown(getByText(/Text/i));
    expect(span).toHaveClass('is-elastic');
  });

  it('should not be elastic', () => {
    const { getByText, container } = render(<Switch onChange={onChange}>Text</Switch>);
    const span = container.querySelector('span');
    fireEvent.mouseOut(getByText(/Text/i));
    expect(span).not.toHaveClass('is-elastic');
  });

  it('should not be elastic 2', () => {
    const { getByText, container } = render(<Switch onChange={onChange}>Text</Switch>);
    const span = container.querySelector('span');
    fireEvent.mouseUp(getByText(/Text/i));
    expect(span).not.toHaveClass('is-elastic');
  });

  it('should set input checked if checked', () => {
    const { container } = render(
      <Switch value="foo" checked={true} onChange={onChange}>
        Text
      </Switch>
    );
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toEqual('foo');
    expect(input.checked).toEqual(true);
  });

  it('should change value on change event', () => {
    const { container } = render(<Switch onChange={onChange}>Text</Switch>);
    const label = container.querySelector('label') as HTMLLabelElement;

    fireEvent.click(label);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
