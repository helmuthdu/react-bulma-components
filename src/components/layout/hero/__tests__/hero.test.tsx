import { render } from '@testing-library/react';
import * as React from 'react';
import { Hero } from '..';
import { HeroBody, HeroFooter, HeroHeader } from '../components';

describe('Hero component', () => {
  // @ts-ignore
  it.each([[Hero], [HeroHeader], [HeroBody], [HeroFooter]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Hero className="other-class this-is-a-test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Hero style={{ height: 250 }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use gradient style', () => {
    const { asFragment } = render(<Hero color="primary" gradient />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Hero with hero head, body and footer', () => {
    const { asFragment } = render(
      <Hero size="fullheight" color="primary">
        <HeroHeader renderAs="header">
          <div className="has-background-info">Header</div>
        </HeroHeader>
        <HeroBody>Body</HeroBody>
        <HeroFooter renderAs="footer">
          <div className="has-background-danger">Footer</div>
        </HeroFooter>
      </Hero>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it(`Should use use color`, () => {
    const { asFragment } = render(
      <Hero color={'white'}>
        <p>Default</p>
      </Hero>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
