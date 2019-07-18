import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Level, LevelItem, LevelSide } from '.';
import { Breakpoints } from '../../constants';
import { Box } from '../../elements/box';
import { Button } from '../../elements/button';
import { Heading } from '../../elements/heading';
import { Control, Field, Input } from '../../form';
import { Container } from '../container';
import { Hero, HeroHead } from '../hero';
import { Section } from '../section';

const style: React.CSSProperties = { textAlign: 'center' };

storiesOf('Level', module)
  .addDecorator(story => (
    <Hero size="fullheight">
      <HeroHead as="header">
        <Container>{story()}</Container>
      </HeroHead>
    </Hero>
  ))
  .add('Default', () => (
    <Section>
      <Box>
        <Level as="nav">
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
                  <Button as="button">Search</Button>
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
              <Button as="a" color="success">
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
        <Level as="nav">
          <LevelItem style={style}>
            <div>
              <Heading as="p" heading>
                Tweets
              </Heading>
              <Heading as="p">3,210</Heading>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Heading as="p" heading>
                Following
              </Heading>
              <Heading as="p">210</Heading>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Heading as="p" heading>
                Followers
              </Heading>
              <Heading as="p">321</Heading>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Heading as="p" heading>
                Likes
              </Heading>
              <Heading as="p">321K</Heading>
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
          <Level as="nav" breakpoint={breakpoint}>
            <LevelItem style={style}>
              <div>
                <Heading as="p" heading>
                  Tweets
                </Heading>
                <Heading as="p">3,210</Heading>
              </div>
            </LevelItem>
            <LevelItem style={style}>
              <div>
                <Heading as="p" heading>
                  Following
                </Heading>
                <Heading as="p">210</Heading>
              </div>
            </LevelItem>
            <LevelItem style={style}>
              <div>
                <Heading as="p" heading>
                  Followers
                </Heading>
                <Heading as="p">321</Heading>
              </div>
            </LevelItem>
            <LevelItem style={style}>
              <div>
                <Heading as="p" heading>
                  Likes
                </Heading>
                <Heading as="p">321K</Heading>
              </div>
            </LevelItem>
          </Level>
        </Box>
      </Section>
    ))
  );
