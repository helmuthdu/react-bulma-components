import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Element } from '..';

describe('Element component', () => {
  it('should render', () => {
    const { asFragment } = render(
      // @ts-ignore
      <Element pull="left" textColor="white">
        Facebook
      </Element>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should accept a react Element as renderAs prop', () => {
    const Custom = (props: any) => (
      <p {...props}>
        Custom
        {props.children}
      </p>
    );

    Custom.propTypes = { children: PropTypes.node.isRequired };

    const { asFragment } = render(<Element renderAs={Custom}>This should be a p element</Element>);
    expect(asFragment()).toMatchSnapshot();
  });
});
