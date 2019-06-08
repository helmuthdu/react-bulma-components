import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Hero, HeroBody, HeroFooter, HeroHeader } from '.';
import { Heading } from '../../elements/heading';
import { Container } from '../container';
import { Section } from '../section';

storiesOf('Hero', module)
  .add('Default with color', () => (
    <Container>
      <Section>
        <Hero color="primary">
          <HeroBody>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </HeroBody>
        </Hero>
      </Section>
      <Section>
        <Hero color="danger">
          <HeroBody>
            <Container>
              <Heading>Hero title Danger</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </HeroBody>
        </Hero>
      </Section>
      <Section>
        <Hero color="info">
          <HeroBody>
            <Container>
              <Heading>Hero title Info</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </HeroBody>
        </Hero>
      </Section>
    </Container>
  ))
  .add('Gradient (EXPERIMENTAL)', () => (
    <Container>
      <Section>
        <Hero color="primary" gradient>
          <HeroBody>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </HeroBody>
        </Hero>
      </Section>
      <Section>
        <Hero color="danger" gradient>
          <HeroBody>
            <Container>
              <Heading>Hero title Danger</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </HeroBody>
        </Hero>
      </Section>
      <Section>
        <Hero color="info" gradient>
          <HeroBody>
            <Container>
              <Heading>Hero title Info</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </HeroBody>
        </Hero>
      </Section>
    </Container>
  ))
  .add('Differents Sizes', () => (
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
  ))
  .add('Vertical Alignments', () => (
    <Container>
      <Hero size="fullheight" color="primary">
        <HeroHeader renderAs="header">
          <div className="has-background-info">Header</div>
        </HeroHeader>
        <HeroBody>Body</HeroBody>
        <HeroFooter>
          <div className="has-background-danger">Footer</div>
        </HeroFooter>
      </Hero>
    </Container>
  ));
