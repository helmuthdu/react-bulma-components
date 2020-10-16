import * as React from 'react';
import { Hero, HeroBody, HeroFoot, HeroHead } from '.';
import { Title } from '../../elements/title';
import { Container } from '../container';
import { Section } from '../section';

export const Default = () => (
  <Container>
    <Section>
      <Hero color="primary">
        <HeroBody>
          <Container>
            <Title>Hero title Primary</Title>
            <Title subtitle size={3}>
              Subtitle
            </Title>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
    <Section>
      <Hero color="danger">
        <HeroBody>
          <Container>
            <Title>Hero title Danger</Title>
            <Title subtitle size={3}>
              Subtitle
            </Title>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
    <Section>
      <Hero color="info">
        <HeroBody>
          <Container>
            <Title>Hero title Info</Title>
            <Title subtitle size={3}>
              Subtitle
            </Title>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
  </Container>
);

export const Gradient = () => (
  <Container>
    <Section>
      <Hero color="primary" gradient>
        <HeroBody>
          <Container>
            <Title>Hero title Primary</Title>
            <Title subtitle size={3}>
              Subtitle
            </Title>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
    <Section>
      <Hero color="danger" gradient>
        <HeroBody>
          <Container>
            <Title>Hero title Danger</Title>
            <Title subtitle size={3}>
              Subtitle
            </Title>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
    <Section>
      <Hero color="info" gradient>
        <HeroBody>
          <Container>
            <Title>Hero title Info</Title>
            <Title subtitle size={3}>
              Subtitle
            </Title>
          </Container>
        </HeroBody>
      </Hero>
    </Section>
  </Container>
);

export const DifferentSizes = () => (
  <Container>
    <Hero color="primary" size="medium">
      <HeroBody>Medium</HeroBody>
    </Hero>
    <Hero color="info" size="large">
      <HeroBody>Large</HeroBody>
    </Hero>
    <Hero color="danger" size="fullheight">
      <HeroBody>Full Height</HeroBody>
    </Hero>
  </Container>
);

export const VerticalAlignments = () => (
  <Container>
    <Hero size="fullheight" color="primary">
      <HeroHead as="header">
        <div className="has-background-info">Header</div>
      </HeroHead>
      <HeroBody>Body</HeroBody>
      <HeroFoot>
        <div className="has-background-danger">Footer</div>
      </HeroFoot>
    </Hero>
  </Container>
);

const story = {
  title: 'Hero',
  component: Hero,
  subcomponents: {
    HeroBody,
    HeroFoot,
    HeroHead
  }
};

export default story;
