import * as React from 'react';
import { Loader } from '.';

export const Default = (args: any) => (
  <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: '#f1f1f1' }}>
    <Loader {...args} />
  </div>
);

export default {
  title: 'Loader',
  component: Loader
};
