import * as React from 'react';
import { Container } from '.';
import { Title } from '../../elements/title';
import { Section } from '../section';

export const Default = () => (
  <div>
    <Section>
      <Container>
        <div className="has-background-success">
          <Title size={5}>Default</Title>
          <Title subtitle>Container</Title>
        </div>
      </Container>
    </Section>
    <Section>
      <Container fluid>
        <div className="has-background-info">
          <Title size={5}>Fluid</Title>
          <Title subtitle>Container</Title>
        </div>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="widescreen">
        <div className="has-background-warning">
          <Title size={5}>Breakpoint Widescreen</Title>
          <Title subtitle>Container</Title>
        </div>
      </Container>
    </Section>
    <Section>
      <Container breakpoint="fullhd">
        <div className="has-background-danger">
          <Title size={5}>Breakpoint Fullhd</Title>
          <Title subtitle>Container</Title>
        </div>
      </Container>
    </Section>
  </div>
);

const story = {
  title: 'Container',
  component: Container
};

export default story;
