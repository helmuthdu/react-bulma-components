import * as React from 'react';
import { Text } from '.';
import { Box } from '../box';

export const Default = () => (
  <div>
    <Box>
      <Text>Text</Text>
      <Text textSize={6}>Text smaller</Text>
      <Text textWeight="bold">Text bold</Text>
    </Box>
  </div>
);

export default {
  title: 'Text',
  component: Text
};
