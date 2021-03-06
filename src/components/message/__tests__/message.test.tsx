import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Message, MessageBody, MessageHeader } from '..';

describe('Message component', () => {
  it.each([[Message], [MessageHeader], [MessageBody]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with all', () => {
    const { asFragment } = render(
      <Message>
        <MessageHeader>Lorem Ipsum</MessageHeader>
        <MessageBody>Lorem Ipsum</MessageBody>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Message className="other-class">
        <MessageHeader>Lorem Ipsum</MessageHeader>
        <MessageBody>Lorem Ipsum</MessageBody>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as an html section', () => {
    const { asFragment } = render(<Message as="section">This should be a section</Message>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have custom inline styles', () => {
    const { asFragment } = render(
      <Message as="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component with different tag', () => {
    const Custom = (props: any) => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );
    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(<Message as={Custom}>This should be a p element</Message>);
    expect(asFragment()).toMatchSnapshot();
  });
});
