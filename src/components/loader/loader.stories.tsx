import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Loader } from '.';

storiesOf('Loader', module).add('Default', () => (
  <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: '#f1f1f1' }}>
    <Loader
      active={boolean('Active', false)}
      inverted={boolean('Inverted', false)}
      fullscreen={boolean('Fullscreen', false)}
    />
  </div>
));
