import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Heading } from '.';
import { Box } from '../box';

storiesOf('Heading', module).add('Default', () => (
  <div>
    <Box>
      <Heading>Title</Heading>
      <Heading subtitle size={6}>
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={1}>Title</Heading>
      <Heading subtitle size={3}>
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={2}>Title</Heading>
      <Heading subtitle size={4} as="h2">
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={3}>Title</Heading>
      <Heading subtitle size={5} as="h2">
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={4}>Title</Heading>
      <Heading subtitle size={6} as="h2">
        Subtitle
      </Heading>
    </Box>
  </div>
));
