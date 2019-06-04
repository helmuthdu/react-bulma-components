import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Progress } from '.';

storiesOf('Progress', module)
  .add('Default', () => (
    <div>
      <Progress max={100} value={15} color="primary" size="small" />
      <Progress max={100} value={15} color="info" />
      <Progress max={100} value={15} color="success" size="medium" />
      <Progress max={100} value={15} color="danger" size="large" />
    </div>
  ))
  .add('Indeterminate', () => (
    <div>
      <Progress max={100} color="primary" size="small" />
      <Progress max={100} color="info" />
      <Progress max={100} color="success" size="medium" />
      <Progress max={100} color="danger" size="large" />
    </div>
  ));
