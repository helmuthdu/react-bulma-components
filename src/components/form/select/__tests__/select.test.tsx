import { render } from '@testing-library/react';
import * as React from 'react';
import { Select } from '../select';

describe('Select component', () => {
  let onChange;

  beforeEach(() => {
    onChange = jest.fn();
  });

  it('should render', () => {
    const { asFragment } = render(
      <Select onChange={onChange}>
        <option>1</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Select onChange={onChange} className="other-class this-is-a-test">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(
      <Select onChange={onChange} style={{ width: '100%' }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should be large, red, disabled and multioption', () => {
    const { asFragment } = render(
      <Select onChange={onChange} value={[]} color="danger" size="large" multiple disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
