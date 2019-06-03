import '@mdi/font/css/materialdesignicons.css';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from '.';

storiesOf('Icon', module)
  .add('Default', () => (
    <div>
      <Icon icon="star" color="info" />
      <Icon icon="shield-account" />
    </div>
  ))
  .add('Custom Icon', () => (
    <div>
      <Icon>
        <span className="mdi mdi-menu mdi-48px" />
      </Icon>
    </div>
  ));
