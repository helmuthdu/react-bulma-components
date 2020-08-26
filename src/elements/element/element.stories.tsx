import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Element } from '.';

storiesOf('Element', module).add('Default', () => (
  <Element
    paddingless={boolean('paddingless', false)}
    responsive={{
      mobile: {
        display: {
          value: 'block'
        },
        hide: {
          value: true
        }
      },
      tablet: {
        display: {
          value: 'flex'
        }
      },
      desktop: {
        display: {
          value: 'inline-flex',
          only: true
        }
      },
      widescreen: {
        display: {
          value: 'inline-block'
        }
      }
    }}>
    Custom Element to use Bulma helper
  </Element>
));
