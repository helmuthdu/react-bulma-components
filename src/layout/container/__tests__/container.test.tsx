import { render } from '@testing-library/react';
import * as React from 'react';
import { Container } from '..';

describe('Container component', () => {
  it('should render', () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have helper classnames', () => {
    const { asFragment } = render(
      <Container>
        <div className="has-background-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Container>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
