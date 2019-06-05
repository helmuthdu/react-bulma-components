import { render } from '@testing-library/react';
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
    const { asFragment } = render(<Input onChange={onChange} color="success" type="email" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be large and readOnly', () => {
    const { asFragment } = render(<Input onChange={onChange} readOnly size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be disabled with placeholder and value', () => {
    const { asFragment } = render(<Input onChange={onChange} value="TEST" disabled placeholder="hello tests" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
