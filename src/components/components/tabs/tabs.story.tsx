import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tabs } from '.';
import { Tab } from './components/tab';

storiesOf('Tabs', module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => (
    <Tabs
      type={select('Tab type', { boxed: 'boxed', toggle: 'toggle', 'toggle-rounded': 'toggle-rounded' }, 'boxed')}
      fullwidth={boolean('Full width', false)}
      align={select('Align', { centered: 'centered', right: 'right' }, 'right')}
    >
      <Tab active>Test</Tab>
      <Tab>Test</Tab>
      <Tab>Test</Tab>
      <Tab>Test</Tab>
    </Tabs>
  ));
