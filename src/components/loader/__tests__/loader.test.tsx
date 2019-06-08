import { render } from '@testing-library/react';
import * as React from 'react';
import { Loader } from '../loader';

describe('Loader component', () => {
  it('should render', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Loader className="other-class test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as an html section', () => {
    const { asFragment } = render(<Loader as="section" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have custom inline styles', () => {
    const { asFragment } = render(<Loader as="section" style={{ width: 200, zIndex: 1 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
