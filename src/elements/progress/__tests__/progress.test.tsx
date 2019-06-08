import { render } from '@testing-library/react';
import * as React from 'react';
import { Progress } from '..';

describe('Progress component', () => {
  it('should render', () => {
    const { asFragment } = render(<Progress value={30} max={100} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Progress value={30} max={100} className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Progress value={30} max={100} style={{ width: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be Large', () => {
    const { container } = render(<Progress value={30} max={100} size="large" />);
    expect(container.firstChild).toHaveClass('is-large');
  });

  it(`Should use use color`, () => {
    const { container } = render(<Progress value={30} max={100} color="white" />);
    expect(container.firstChild).toHaveClass(`is-white`);
  });
});
