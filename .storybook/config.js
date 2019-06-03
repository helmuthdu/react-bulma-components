import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';
import * as React from 'react';
import extraViewports from './extra-viewports.json';

import 'index.sass';

addParameters({
  options: {
    name: 'React Bulma Components',
    url: 'https://github.com/couds/react-bulma-components',
    theme: themes.dark,
  },
});

addDecorator(withKnobs);

addDecorator(withInfo({
  source: false,
}));

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...extraViewports,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
