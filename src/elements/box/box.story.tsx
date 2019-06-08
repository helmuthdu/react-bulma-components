import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Box } from '.';
import { Spacing } from '../../constants';
import { Media, MediaItem } from '../../layout/media';
import { Content } from '../content';
import { Image } from '../image';

const spacing: { [key: string]: Spacing } = {
  none: 'none',
  tiny: 'tiny',
  small: 'small',
  medium: 'none',
  large: 'large',
  huge: 'huge'
};

storiesOf('Box', module).add('Default', () => (
  <Box
    paddingless={boolean('paddingless', false)}
    padding={select('padding', spacing, 'none')}
    responsive={{
      mobile: {
        display: { value: 'block' }
      },
      tablet: {
        display: { value: 'flex' },
        hide: {
          value: true,
          only: true
        }
      },
      desktop: {
        display: { value: 'inline-flex', only: true }
      },
      widescreen: {
        display: { value: 'inline-block' },
        hide: {
          value: true
        }
      }
    }}
  >
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
));
