import { render } from '@testing-library/react';
import * as React from 'react';
import { Level, LevelItem, LevelSide } from '..';

describe('Level component', () => {
  // @ts-ignore
  it.each([[Level], [LevelSide], [LevelItem]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Level className="other-class this-is-a-test">
        <LevelItem>Item 1</LevelItem>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(
      <Level style={{ height: 250 }}>
        <LevelItem>Item 1</LevelItem>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render Levels with right and left side', () => {
    const { asFragment } = render(
      <Level>
        <LevelSide>
          <LevelItem>Item 1</LevelItem>
          <LevelItem>Item 2</LevelItem>
        </LevelSide>
        <LevelSide align="right">
          <LevelItem>Item 3</LevelItem>
        </LevelSide>
      </Level>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
