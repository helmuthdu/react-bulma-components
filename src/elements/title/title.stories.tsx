import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Title } from '.';
import { Box } from '../box';

storiesOf('Title', module).add('Default', () => (
  <div>
    <Box>
      <Title>Title</Title>
      <Title subtitle size={6}>
        Subtitle
      </Title>
    </Box>
    <Box>
      <Title size={1}>Title</Title>
      <Title subtitle size={3}>
        Subtitle
      </Title>
    </Box>
    <Box>
      <Title size={2}>Title</Title>
      <Title subtitle size={4} as="h2">
        Subtitle
      </Title>
    </Box>
    <Box>
      <Title size={3}>Title</Title>
      <Title subtitle size={5} as="h2">
        Subtitle
      </Title>
    </Box>
    <Box>
      <Title size={4}>Title</Title>
      <Title subtitle size={6} as="h2">
        Subtitle
      </Title>
    </Box>
  </div>
));
