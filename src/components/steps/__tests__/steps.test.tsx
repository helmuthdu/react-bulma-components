import { render } from '@testing-library/react';
import * as React from 'react';
import { Steps } from '../steps';

describe('Steps component', () => {
  it('should render', () => {
    const { asFragment } = render(<Steps>content</Steps>);
    expect(asFragment()).toMatchSnapshot();
  });
});
