import { render } from '@testing-library/react';
import * as React from 'react';
import { Field, FieldBody, FieldLabel } from '..';

describe('Field component', () => {
  it.each([[Field], [FieldLabel], [FieldBody]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have field classname with grouped classname', () => {
    const { asFragment } = render(
      <Field context="group">
        <div className="has-background-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have field classname with addons classname', () => {
    const { asFragment } = render(
      <Field context="addons">
        <div className="has-background-success">
          <p>Default</p>
          <p>Container</p>
        </div>
      </Field>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
