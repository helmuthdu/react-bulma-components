import { storiesOf } from '@storybook/react';
import React from 'react';
import { Container } from '.';
import { Heading } from '../../elements/heading';
import { Section } from '../section';

storiesOf('Container', module).add('Default', () => (
  <div>
    <Section>
      <Container>
        <div className="has-background-success">
          <Heading size={5}>Default</Heading>
          <Heading subtitle>Container</Heading>
        </div>
      </Container>
    </Section>
    <Section>
      <Container fluid>
        <div className="has-background-info">
          <Heading size={5}>Fluid</Heading>
          <Heading subtitle>Container</Heading>
        </div>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="widescreen">
        <div className="has-background-warning">
          <Heading size={5}>Breakpoint Widescreen</Heading>
          <Heading subtitle>Container</Heading>
        </div>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="fullhd">
        <div className="has-background-danger">
          <Heading size={5}>Breakpoint Fullhd</Heading>
          <Heading subtitle>Container</Heading>
        </div>
      </Container>
    </Section>
  </div>
));
