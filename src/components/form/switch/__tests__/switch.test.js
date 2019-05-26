import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { Switch } from '../switch';

describe('Switch component', () => {
  let onChange;

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
    const { getByText, getByTestId } = render(<Switch onChange={onChange}>Text</Switch>);
    fireEvent.mouseDown(getByText(/Text/i));
    expect(getByTestId('switch-check')).toHaveClass('is-elastic');
  });

  it('should not be elastic', () => {
    const { getByText, getByTestId } = render(<Switch onChange={onChange}>Text</Switch>);
    fireEvent.mouseOut(getByText(/Text/i));
    expect(getByTestId('switch-check')).not.toHaveClass('is-elastic');
  });

  it('should not be elastic 2', () => {
    const { getByText, getByTestId } = render(<Switch onChange={onChange}>Text</Switch>);
    fireEvent.mouseUp(getByText(/Text/i));
    expect(getByTestId('switch-check')).not.toHaveClass('is-elastic');
  });

  it('should set input checked if checked', () => {
    const { getByTestId } = render(<Switch onChange={onChange} checked />);
    expect(getByTestId('switch-input')).toHaveAttribute('checked', '');
  });

  it('should change value on change event', () => {
    const { getByTestId } = render(<Switch onChange={onChange}>Text</Switch>);
    fireEvent.click(getByTestId('switch-label'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
