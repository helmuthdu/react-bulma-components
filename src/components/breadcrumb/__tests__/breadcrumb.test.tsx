import { render } from '@testing-library/react';
import * as React from 'react';
import { Breadcrumb } from '..';

describe('Breadcrumb component', () => {
  it('should render', () => {
    const { asFragment } = render(<Breadcrumb />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render list of items', () => {
    const { asFragment } = render(
      <Breadcrumb
        items={[
          {
            url: '/',
            name: 'Home'
          },
          {
            url: '/section',
            name: 'Section'
          },
          {
            url: '/detail',
            name: 'Details',
            active: true
          }
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  ['arrow', 'dot', 'bullet', 'succeeds'].map(separator =>
    it(`should use separator ${separator}`, () => {
      const { asFragment } = render(
        <Breadcrumb
          separator={separator as any}
          items={[
            {
              name: 'Storybook',
              url: '#1'
            },
            {
              name: 'Breadcrumb',
              url: '#2'
            },
            {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true
            }
          ]}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    })
  );

  it('should use inline style and custom size', () => {
    const { asFragment } = render(
      <Breadcrumb
        style={{ marginTop: 10 }}
        size="large"
        items={[
          {
            url: '/',
            name: 'Home'
          },
          {
            url: '/section',
            name: 'Section'
          },
          {
            url: '/detail',
            name: 'Details',
            active: true
          }
        ]}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
