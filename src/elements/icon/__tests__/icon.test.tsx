import { render } from '@testing-library/react';
import * as React from 'react';
import { Icon } from '..';

describe('Icon component', () => {
  it('should render with material icons', () => {
    const { container } = render(<Icon pack="mdi" icon="bars" size="large" />);
    expect(container.querySelector('.mdi')).toHaveClass('mdi', 'mdi-bars', 'mdi-48px');
  });
  it('should render with fontawesome', () => {
    const { container } = render(<Icon pack="fas" icon="bars" size="medium" />);
    expect(container.querySelector('.fas')).toHaveClass('fas', 'fa-bars', 'fa-2x');
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Icon icon="bars" className="other-class" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have different color', () => {
    const { container } = render(<Icon icon="bars" color="primary" />);
    expect(container.querySelector('.icon')).toHaveClass('has-text-primary');
  });

  it('should have a different size', () => {
    const { container } = render(<Icon icon="bars" size="large" />);
    expect(container.querySelector('.icon')).toHaveClass('is-large');
  });
});
