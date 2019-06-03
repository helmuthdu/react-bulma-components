import { fireEvent, render } from '@testing-library/react';
import { JSDOM } from 'jsdom';
import * as React from 'react';

import { InputFile } from '../input-file';

describe('Input file component', () => {
  beforeEach(() => {
    (global as any).window = new JSDOM('<body><div id="app-root"></div></body>').window;
  });

  it('should render', () => {
    const { asFragment } = render(<InputFile onChange={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call onChange with file data', () => {
    const onChange = jest.fn();
    const { getByTestId, getByText } = render(
      <InputFile className="input-file" style={{ width: 400 }} onChange={onChange} />
    );
    fireEvent.change(getByTestId('file-input'), {
      target: {
        files: [
          {
            name: 'dummyValue.something'
          }
        ]
      }
    });
    expect(getByText('dummyValue.something')).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
  });

  it('should call onChange without file data', () => {
    const onChange = jest.fn();
    const { getByTestId, container } = render(
      <InputFile className="input-file" style={{ width: 400 }} onChange={onChange} />
    );
    fireEvent.change(getByTestId('file-input'), {
      target: {
        files: []
      }
    });
    expect(container.querySelector('[data-testid="file-name"]')).toBeNull();
    expect(onChange).toHaveBeenCalled();
  });

  it('should pass file attributes', () => {
    const props = {
      accept: 'image/*',
      capture: 'source',
      multiple: true
    };
    const { asFragment } = render(<InputFile onChange={() => {}} {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
