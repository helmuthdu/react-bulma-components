import '@mdi/font/css/materialdesignicons.css';
import * as React from 'react';
import { Icon } from '.';
import { Container } from '../../layout/container';

export const Default = () => (
  <Container fluid padding={6}>
    <Icon icon="star" color="info" size="large" />
    <Icon icon="shield-account" />
  </Container>
);

export const CustomIcons = () => (
  <div>
    <Icon>
      <span className="mdi mdi-menu mdi-48px" />
    </Icon>
  </div>
);

const story = {
  title: 'Icon',
  component: Icon
};

export default story;
