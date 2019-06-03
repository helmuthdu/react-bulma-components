import { render } from '@testing-library/react';
import * as React from 'react';
import { Help } from '../help';

describe('Help component', () => {
  it('should render', () => {
    const { asFragment } = render(<Help />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Help className="other-class this-is-a-test">Default</Help>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Help style={{ height: 250 }}>Default</Help>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be displayed as a successful message', () => {
    const { asFragment } = render(<Help color="success">Default</Help>);
    expect(asFragment()).toMatchSnapshot();
  });
});
