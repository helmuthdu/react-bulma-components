import { render } from '@testing-library/react';
import * as React from 'react';
import { Loader } from '../loader';

describe('Loader component', () => {
  it('should render', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { container } = render(<Loader className="other-class test" />);
    expect(container.querySelector('.loader')).toHaveClass('other-class', 'test');
  });

  it('should be active', () => {
    const { container } = render(<Loader active />);
    expect(container.querySelector('.loader')).toHaveClass('is-active');
  });

  it('should have inverted background color', () => {
    const { container } = render(<Loader inverted />);
    expect(container.querySelector('.loader-background')).toHaveClass('is-inverted');
  });

  it('should render in fullscreen', () => {
    const { container } = render(<Loader active fullscreen />);
    expect(container.querySelector('.loader')).toHaveClass('is-active', 'is-fullscreen');
  });

  it('should have custom inline styles', () => {
    const { asFragment } = render(<Loader as="section" style={{ width: 200, zIndex: 1 }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
