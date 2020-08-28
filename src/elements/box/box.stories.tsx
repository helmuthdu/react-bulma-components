import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Box } from '.';
import { Spacing } from '../../constants';
import { Media, MediaItem } from '../../layout/media';
import { Content } from '../content';
import { Image } from '../image';

const spacing: { [key: number]: Spacing } = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6
};

export const Default = () => (
  <Box
    padding={select('padding', spacing, 0)}
    mobile={{
      display: 'block'
    }}
    tablet={{
      display: 'flex',
      hidden: { only: true }
    }}
    desktop={{
      display: { only: 'inline-flex' }
    }}
    widescreen={{
      display: 'inline-block',
      hidden: true
    }}>
    <Media>
      <MediaItem as="figure" position="left">
        <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
      </MediaItem>
      <MediaItem>
        <Content>
          <p>
            <strong>John Smith</strong>
            <small>@johnsmith</small>
            <small>31m</small>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
            vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </Content>
      </MediaItem>
    </Media>
  </Box>
);

export default {
  title: 'Box',
  component: Box
};
