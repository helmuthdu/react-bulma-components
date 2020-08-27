import { boolean, select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Tab, Tabs } from '.';

export const Default = () => (
  <Tabs
    type={select('Tab type', { boxed: 'boxed', toggle: 'toggle', 'toggle-rounded': 'toggle-rounded' }, 'boxed')}
    fullwidth={boolean('Full width', false)}
    align={select('Align', { default: null, centered: 'centered', right: 'right' }, 'right')}>
    <Tab active>Test</Tab>
    <Tab>Test</Tab>
    <Tab>Test</Tab>
    <Tab>Test</Tab>
  </Tabs>
);

export default {
  title: 'Tabs',
  component: Tabs,
  subcomponents: {
    Tab
  },
  decorators: [
    (Story: any) => (
      <div style={{ margin: 10 }}>
        <Story />
      </div>
    )
  ]
};
