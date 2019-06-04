import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Box } from '.';
import { Media } from '../../layout/media';
import { Content } from '../content';
import { Image } from '../image';
import { MediaItem } from '../../layout/media/components';

storiesOf('Box', module).add('Default', () => (
  <Box
    paddingless={boolean('paddingless', false)}
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
      <MediaItem renderAs="figure" position="left">
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
