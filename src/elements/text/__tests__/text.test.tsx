import { render } from '@testing-library/react';
import * as React from 'react';
import { Text } from '..';

describe('Text component', () => {
  it('should render', () => {
    const { asFragment } = render(<Text />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Text className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Text style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have size 3 and rendered as span', () => {
    const { asFragment } = render(
      <Text textSize={3} as="span">
        Subtitle
      </Text>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
