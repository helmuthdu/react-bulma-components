import { render } from '@testing-library/react';
import * as React from 'react';
import { Tile } from '..';

describe('Tile component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Tile>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Tile className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(
      <Tile style={{ height: 250 }}>
        <p>Default</p>
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as Section', () => {
    const { asFragment } = render(
      <Tile as="section">
        <p>Default</p>
      </Tile>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it(`Should use use color`, () => {
    const { container } = render(
      <Tile notification color="white">
        <p>Default</p>
      </Tile>
    );
    expect(container.firstChild).toHaveClass(`is-white`);
  });
});
