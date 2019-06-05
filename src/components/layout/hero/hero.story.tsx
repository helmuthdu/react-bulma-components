import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Hero, HeroBody, HeroFooter, HeroHead } from '.';
import { Heading } from '../../elements/heading';
import { Container } from '../container';
import { Section } from '../section';

storiesOf('Hero', module)
  .add('Default with color', () => (
    <div>
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
    </div>
  ))
  .add('Gradient (EXPERIMENTAL)', () => (
    <div>
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
    </div>
  ))
  .add('Differents Sizes', () => (
    <div>
      <Hero color="primary" size="medium">
        <HeroBody>Medium</HeroBody>
      </Hero>
      <Hero color="info" size="large">
        <HeroBody>Large</HeroBody>
      </Hero>
      <Hero color="danger" size="fullheight">
        <HeroBody>FULL HEIGHT</HeroBody>
      </Hero>
    </div>
  ))
  .add('Vertical Alignments', () => (
    <Hero size="fullheight" color="primary">
      <HeroHead renderAs="header">
        <div className="has-background-info">Header</div>
      </HeroHead>
      <HeroBody>Body</HeroBody>
      <HeroFooter>
        <div className="has-background-danger">Footer</div>
      </HeroFooter>
    </Hero>
  ));
