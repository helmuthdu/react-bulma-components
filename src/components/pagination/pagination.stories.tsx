import * as React from 'react';
import { Pagination } from '.';

export const Default = () => <Pagination showPrevNext current={3} total={5} />;

export const WithoutButtons = () => <Pagination current={3} total={5} />;

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [
    (Story: any) => (
      <div style={{ margin: 50 }}>
        <Story />
      </div>
    )
  ]
};
