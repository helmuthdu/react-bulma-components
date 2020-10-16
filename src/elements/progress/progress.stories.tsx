import * as React from 'react';
import { Progress } from '.';

export const Default = () => (
  <div>
    <Progress max={100} value={15} color="primary" size="small" />
    <Progress max={100} value={15} color="info" />
    <Progress max={100} value={15} color="success" size="medium" />
    <Progress max={100} value={15} color="danger" size="large" />
  </div>
);

export const Indeterminate = () => (
  <div>
    <Progress max={100} color="primary" size="small" />
    <Progress max={100} color="info" />
    <Progress max={100} color="success" size="medium" />
    <Progress max={100} color="danger" size="large" />
  </div>
);

const story = {
  title: 'Progress',
  component: Progress
};

export default story;
