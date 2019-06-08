import { fireEvent, render } from '@testing-library/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Button } from '..';
import { ButtonGroup } from '../button-group';

const Link = ({ to, children }: any) => <a href={to}>{children}</a>;

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

describe('Button component', () => {
  // @ts-ignore
  it.each([[Button], [ButtonGroup]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be an anchor button', () => {
    const { asFragment } = render(<Button as="a" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be a Primary Button', () => {
    const { asFragment } = render(<Button color="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be a Large Primary Button', () => {
    const { asFragment } = render(<Button color="primary" size="large" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as a inactive Button', () => {
    const { asFragment } = render(<Button inactive color="primary" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as a html button', () => {
    const { asFragment } = render(<Button as="button" color="danger" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as a React element link with to prop', () => {
    const { asFragment } = render(
      <Button as={Link} color="danger">
        TEST
      </Button>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render be disabled', () => {
    const { asFragment } = render(<Button disabled />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be a submit form button', () => {
    const { asFragment } = render(<Button submit />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be a reset form button', () => {
    const { asFragment } = render(<Button reset />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a Click listener', () => {
    const onClick = jest.fn();
    const container: any = render(<Button onClick={onClick} />).container;
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have no dispatch click handler if disabled', () => {
    const onClick = jest.fn();
    const container: any = render(<Button disabled onClick={onClick} />).container;
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  describe('Button Group component', () => {
    it('should be a default list of buttons', () => {
      const { asFragment } = render(
        <ButtonGroup>
          <Button>test 0</Button>
          <Button>test 1</Button>
        </ButtonGroup>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should concat classname in props with classname', () => {
      const { asFragment } = render(
        <ButtonGroup className="super-class-1 dope-class-2">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </ButtonGroup>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should group buttons together', () => {
      const { asFragment } = render(
        <ButtonGroup hasAddons>
          <Button>test 1</Button>
          <Button>test 2</Button>
        </ButtonGroup>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should be centered', () => {
      const { asFragment } = render(
        <ButtonGroup position="centered">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </ButtonGroup>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('should align to the right', () => {
      const { asFragment } = render(
        <ButtonGroup position="right">
          <Button>test 0</Button>
          <Button>test 1</Button>
        </ButtonGroup>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
