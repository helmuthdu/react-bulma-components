import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Text } from '.';
import { Box } from '../box';

storiesOf('Title', module).add('Default', () => (
  <div>
    <Box>
      <Text>Text</Text>
      <Text textSize={6}>Text smaller</Text>
      <Text textWeight="bold">Text bold</Text>
    </Box>
  </div>
));
