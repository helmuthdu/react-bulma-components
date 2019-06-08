import { render } from '@testing-library/react';
import * as React from 'react';
import { Notification } from '..';

describe('Notification component', () => {
  it('should render', () => {
    const { asFragment } = render(<Notification />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have notification classname', () => {
    const { asFragment } = render(
      <Notification>
        <img alt="placeholder" src="http://bulma.io/images/placeholders/128x128.png" />
      </Notification>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Notification className="other-class this-is-a-test">
        <p>Default</p>
      </Notification>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(
      <Notification style={{ height: 250 }}>
        <p>Default</p>
      </Notification>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as Section', () => {
    const { asFragment } = render(
      <Notification renderAs="section">
        <p>Default</p>
      </Notification>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it(`Should use use color`, () => {
    const { asFragment } = render(
      <Notification color="white">
        <p>Default</p>
      </Notification>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
