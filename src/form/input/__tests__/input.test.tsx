import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Input } from '../input';

describe('Input component', () => {
  let onChange: jest.Mock;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(<Input onChange={onChange} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Input onChange={onChange} className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Input onChange={onChange} style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be type email and a with success colors', () => {
    const { container } = render(<Input onChange={onChange} color="success" type="email" />);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input).toHaveClass('is-success');
    expect(input.type).toEqual('email');
  });

  it('should be rounded, large, inactive and readOnly', () => {
    const { container } = render(<Input onChange={onChange} readOnly size="large" rounded inactive />);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input).toHaveClass('is-large', 'is-rounded', 'is-static');
    expect(input.readOnly).toEqual(true);
  });

  it('should be disabled with placeholder and value', () => {
    const { container } = render(<Input onChange={onChange} value="TEST" disabled placeholder="hello tests" />);
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.value).toEqual('TEST');
    expect(input.disabled).toEqual(true);
    expect(input.placeholder).toEqual('hello tests');
  });

  it('should update value', () => {
    const { container } = render(<Input onChange={onChange} value="TEST" disabled placeholder="hello tests" />);
    const input = container.querySelector('input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });
});
