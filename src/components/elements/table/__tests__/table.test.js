import React from 'react';
import { render } from '@testing-library/react';
import { Table } from '..';

describe('Table component', () => {
  it('should render', () => {
    const { asFragment } = render(<Table />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(
      <Table className="other-class this-is-a-test">
        <tbody>
          <tr>
            <td>Default</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should use inline styles', () => {
    const { asFragment } = render(
      <Table style={{ height: 250 }}>
        <tbody>
          <tr>
            <td>Default</td>
          </tr>
        </tbody>
      </Table>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
