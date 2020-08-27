import { boolean } from '@storybook/addon-knobs';
import * as React from 'react';
import { Image } from '.';
import { Table } from '../table';
import CONSTANTS from './constants';

export const Default = () => (
  <div style={{ width: 320 }}>
    <Image rounded={boolean('rounded', false)} src="http://bulma.io/images/placeholders/640x480.png" size="3by2" />
  </div>
);

export const FixedSquare = () => (
  <Table>
    <thead>
      <tr>
        <th />
        <th>Size</th>
        <th>Image</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {CONSTANTS.SIZES.filter(size => typeof size === 'number').map((size: any) => (
        <tr key={size}>
          <td />
          <td style={{ width: 100 }}>{size}</td>
          <td style={{ width: 128 }}>
            <Image size={size} />
          </td>
          <td />
        </tr>
      ))}
    </tbody>
  </Table>
);

export const ResponsiveImagesWithRatio = () => (
  <Table>
    <thead>
      <tr>
        <th />
        <th>Size</th>
        <th>Image</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {CONSTANTS.SIZES.filter(size => typeof size === 'string').map((size: any) => (
        <tr key={size}>
          <td />
          <td style={{ width: 100 }}>{size}</td>
          <td style={{ width: 128 }}>
            <Image size={size} />
          </td>
          <td />
        </tr>
      ))}
    </tbody>
  </Table>
);

export default {
  title: 'Image',
  component: Image
};
