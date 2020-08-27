import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Breadcrumb } from '.';
import { Box } from '../../elements/box';

export const Default = () => (
  <div>
    <Box>
      <Breadcrumb
        separator={select(
          'Separator',
          {
            arrow: 'arrow',
            dot: 'dot',
            bullet: 'bullet',
            succeeds: 'succeeds'
          },
          'arrow'
        )}
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
    </Box>
  </div>
);

export const CustomElement = () => {
  /* eslint-disable react/prop-types */
  const Anchor = ({ children, ...props }: any) => (
    <a className="Others" {...props}>
      {children}
    </a>
  );
  /* eslint-enable react/prop-types */

  return (
    <div>
      <Box>
        <Breadcrumb
          as={Anchor}
          hrefAttr="href"
          separator={select(
            'Separator',
            {
              arrow: 'arrow',
              dot: 'dot',
              bullet: 'bullet',
              succeeds: 'succeeds'
            },
            'arrow'
          )}
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
      </Box>
    </div>
  );
};

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
};
