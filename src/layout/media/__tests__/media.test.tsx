import { render } from '@testing-library/react';
import * as React from 'react';
import { Media, MediaContent, MediaItem } from '..';

describe('Media component', () => {
  it.each([[Media], [MediaContent], [MediaItem]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Media style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have media classname', () => {
    const { asFragment } = render(
      <Media>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Media>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should hbe a Media Item', () => {
    const { asFragment } = render(
      <MediaItem as="figure" position="left">
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </MediaItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should hbe a Media Item Centered', () => {
    const { asFragment } = render(
      <MediaItem as="figure" position="center">
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </MediaItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be a Media Content', () => {
    const { asFragment } = render(<MediaContent>Content</MediaContent>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Media className="other-class this-is-a-test">Content</Media>);
    expect(asFragment()).toMatchSnapshot();
  });
});
