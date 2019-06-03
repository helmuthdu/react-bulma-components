import { render } from '@testing-library/react';
import * as React from 'react';
import { Textarea } from '../textarea';

describe('Textarea component', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(<Textarea onChange={onChange} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Textarea onChange={onChange} className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Textarea onChange={onChange} style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be large with 10 rows and readOnly', () => {
    const { asFragment } = render(<Textarea onChange={onChange} rows={10} readOnly size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be disabled with placeholder and value', () => {
    const { asFragment } = render(<Textarea onChange={onChange} value="TEST" disabled placeholder="hello tests" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
