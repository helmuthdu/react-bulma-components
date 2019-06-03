import { render } from '@testing-library/react';
import * as React from 'react';
import { Content } from '..';

describe('Content component', () => {
  it('should render', () => {
    const { asFragment } = render(<Content />);
    expect(asFragment()).toMatchSnapshot();
  });
});
