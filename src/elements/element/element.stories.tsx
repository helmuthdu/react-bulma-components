import * as React from 'react';
import { Element } from '.';

export const Default = () => (
  <Element
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
);

export default {
  title: 'Element',
  component: Element
};
