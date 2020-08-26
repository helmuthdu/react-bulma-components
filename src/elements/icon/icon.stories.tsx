import '@mdi/font/css/materialdesignicons.css';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Icon } from '.';
import { Container } from '../../layout/container';

storiesOf('Icon', module)
  .add('Default', () => (
    <Container fluid padding="6">
      <Icon icon="star" color="info" size="large" />
      <Icon icon="shield-account" />
    </Container>
  ))
  .add('Custom Icon', () => (
    <div>
      <Icon>
        <span className="mdi mdi-menu mdi-48px" />
      </Icon>
    </div>
  ));
