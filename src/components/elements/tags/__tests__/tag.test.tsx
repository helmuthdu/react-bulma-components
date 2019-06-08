import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Tag, Tags } from '..';

describe('Tag component', () => {
  // @ts-ignore
  it.each([[Tag], [Tags]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Tag className="other-class this-is-a-test">Tag name</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(<Tag style={{ width: 250 }}>Tag name</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be Large', () => {
    const { asFragment } = render(<Tag size="large">Tag Large</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have info color', () => {
    const { asFragment } = render(<Tag color="info">Tag Large</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have close button', () => {
    const { asFragment } = render(<Tag close>Tag Large</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have remove button', () => {
    const { asFragment } = render(<Tag remove>Very large text with some extras</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trim content', () => {
    const { asFragment } = render(<Tag ellipsis>Very large text with some extras</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger onClick event on close button', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Tag testId="tag-delete" close onClick={onClick}>
        close
      </Tag>
    );
    fireEvent.click(getByTestId('tag-delete'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should trigger onClick event on remove button', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Tag remove testId="tag-delete" onClick={onClick} />);
    fireEvent.click(getByTestId('tag-delete'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should be group tags', () => {
    const { asFragment } = render(
      <Tags gapless>
        <Tag>Tag 1</Tag>
        <Tag remove />
      </Tags>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it(`Should use use color`, () => {
    const { asFragment } = render(<Tag color="white">tag</Tag>);
    expect(asFragment()).toMatchSnapshot();
  });
});
