import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Select } from '../select';

describe('Select component', () => {
  let onChange: jest.Mock;

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
    const { container } = render(
      <Select onChange={onChange} className="other-class this-is-a-test">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    const select = container.querySelector('.select') as HTMLSelectElement;
    expect(select).toHaveClass('other-class', 'this-is-a-test');
  });

  it('should use inline styles', async () => {
    const { container } = render(
      <Select onChange={onChange} style={{ width: '100%' }}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    const select = container.querySelector('select') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 2 } });
    expect(select).toHaveValue('2');
  });

  it('should be large, red, disabled and multioption', () => {
    const { container } = render(
      <Select onChange={onChange} value={[]} color="danger" size="large" multiple disabled>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
    );
    const select = container.querySelector('select') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: [3] } });
    expect(select).toHaveValue(['3']);
  });
});
