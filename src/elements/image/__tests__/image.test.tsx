import { fireEvent, render, waitFor } from '@testing-library/react';
import * as React from 'react';
import { Image } from '..';

describe('Image component', () => {
  it('should render', () => {
    const { asFragment } = render(<Image src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be rounded', () => {
    const { asFragment } = render(<Image rounded src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be 32x32', () => {
    const { asFragment } = render(<Image size={32} src="http://mydomain.com/image" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have use default image if error encounter', async () => {
    const { container } = render(<Image src="http://mydomain.com/image" fallbackSrc="http://mydomain.com/default" />);
    const image = container.querySelector('img') as HTMLImageElement;
    fireEvent.error(image);

    await waitFor(() => {
      expect(image).toHaveAttribute('src', 'http://mydomain.com/default');
    });
  });

  it('should update src', async () => {
    const getComponent = (url: string) => <Image src={url} />;
    const { container, rerender } = render(getComponent('http://mydomain.com/image'));
    rerender(getComponent('http://mydomain.com/other'));
    const image = container.querySelector('img') as HTMLImageElement;
    expect(image).toHaveAttribute('src', 'http://mydomain.com/other');
  });
});
