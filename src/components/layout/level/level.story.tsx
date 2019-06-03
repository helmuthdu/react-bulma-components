import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Level } from '.';
import { Breakpoints } from '../../../constants';
import { Box } from '../../elements/box';
import { Button } from '../../elements/button';
import { Heading } from '../../elements/heading';
import { Control, Field, Input } from '../../form';
import { Container } from '../container';
import { Hero } from '../hero';
import { HeroHead } from '../hero/components';
import { Section } from '../section';
import { LevelItem, LevelSide } from './components';

const style = { textAlign: 'center' };

storiesOf('Level', module)
  .addDecorator(story => (
    <Hero size="fullheight">
      <HeroHead renderAs="header">
        <Container>{story()}</Container>
      </HeroHead>
    </Hero>
  ))
  .add('Default', () => (
    <Section>
      <Box>
        <Level renderAs="nav">
          <LevelSide align="left">
            <LevelItem>
              <Heading size={5} subtitle>
                <strong>123</strong> posts
              </Heading>
            </LevelItem>
            <LevelItem>
              <Field context="addons">
                <Control>
                  <Input placeholder="Find a post" onChange={() => {}} />
                </Control>
                <Control>
                  <Button renderAs="button">Search</Button>
                </Control>
              </Field>
            </LevelItem>
          </LevelSide>

          <LevelSide align="right">
            <LevelItem>
              <strong>All</strong>
            </LevelItem>
            <LevelItem>
              <a>Published</a>
            </LevelItem>
            <LevelItem>
              <a>Drafts</a>
            </LevelItem>
            <LevelItem>
              <a>Deleted</a>
            </LevelItem>
            <LevelItem>
              <Button renderAs="a" color="success">
                New
              </Button>
            </LevelItem>
          </LevelSide>
        </Level>
      </Box>
    </Section>
  ))
  .add('Items Centered', () => (
    <Section>
      <Box>
        <Level renderAs="nav">
          <LevelItem style={style}>
            <div>
              <Heading renderAs="p" heading>
                Tweets
              </Heading>
              <Heading renderAs="p">3,210</Heading>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Heading renderAs="p" heading>
                Following
              </Heading>
              <Heading renderAs="p">210</Heading>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Heading renderAs="p" heading>
                Followers
              </Heading>
              <Heading renderAs="p">321</Heading>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Heading renderAs="p" heading>
                Likes
              </Heading>
              <Heading renderAs="p">321K</Heading>
            </div>
          </LevelItem>
        </Level>
      </Box>
    </Section>
  ))
  .add('With breakpoint', () =>
    (['mobile'] as Breakpoints[]).map((breakpoint, index) => (
      <Section key={index}>
        <Heading>{breakpoint || 'Without breakpoint'}</Heading>
        <Box>
          <Level renderAs="nav" breakpoint={breakpoint}>
            <LevelItem style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Tweets
                </Heading>
                <Heading renderAs="p">3,210</Heading>
              </div>
            </LevelItem>
            <LevelItem style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Following
                </Heading>
                <Heading renderAs="p">210</Heading>
              </div>
            </LevelItem>
            <LevelItem style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Followers
                </Heading>
                <Heading renderAs="p">321</Heading>
              </div>
            </LevelItem>
            <LevelItem style={style}>
              <div>
                <Heading renderAs="p" heading>
                  Likes
                </Heading>
                <Heading renderAs="p">321K</Heading>
              </div>
            </LevelItem>
          </Level>
        </Box>
      </Section>
    ))
  );
