import { render } from '@testing-library/react';
import * as React from 'react';
import { Title } from '..';

describe('Title component', () => {
  it('should render', () => {
    const { asFragment } = render(<Title />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Title className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Title style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be a subtitle with size rendered as P', () => {
    const { asFragment } = render(
      <Title size={3} subtitle as="p">
        Subtitle
      </Title>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not be spaced because is subtitle', () => {
    const { asFragment } = render(
      <Title spaced subtitle as="p">
        Subtitle
      </Title>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be spaced', () => {
    const { asFragment } = render(
      <Title spaced as="p">
        Subtitle
      </Title>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
