import { render } from '@testing-library/react';
import * as React from 'react';
import { Column, Columns } from '..';

describe('Columns component', () => {
  // @ts-ignore
  it.each([[Columns], [Column]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have columns one column half width and 3 other as default', () => {
    const { asFragment } = render(
      <Columns>
        <Column size={6}>1</Column>
        <Column>2</Column>
        <Column>3</Column>
        <Column>4</Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as paragraph', () => {
    const { asFragment } = render(
      <Columns renderAs="div">
        <Column renderAs="p" size={6}>
          1
        </Column>
        <Column renderAs="p">2</Column>
        <Column renderAs="p">3</Column>
        <Column renderAs="p">4</Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have columns one column half width, other narrow and 2 other as default', () => {
    const { asFragment } = render(
      <Columns>
        <Column size={6}>1</Column>
        <Column narrow>2</Column>
        <Column>3</Column>
        <Column>4</Column>
      </Columns>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
