import * as React from 'react';
import { Level, LevelItem, LevelSide } from '.';
import { Breakpoints } from '../../constants';
import { Box } from '../../elements/box';
import { Button } from '../../elements/button';
import { Title } from '../../elements/title';
import { Control, Field, Input } from '../../form';
import { Container } from '../container';
import { Hero, HeroHead } from '../hero';
import { Section } from '../section';

const style: React.CSSProperties = { textAlign: 'center' };

export const Default = () => (
  <Section>
    <Box>
      <Level as="nav">
        <LevelSide align="left">
          <LevelItem>
            <Title size={5} subtitle>
              <strong>123</strong> posts
            </Title>
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
);

export const ItemsCentered = () => (
  <Section>
    <Box>
      <Level as="nav">
        <LevelItem style={style}>
          <div>
            <Title as="p" title>
              Tweets
            </Title>
            <Title as="p">3,210</Title>
          </div>
        </LevelItem>
        <LevelItem style={style}>
          <div>
            <Title as="p" title>
              Following
            </Title>
            <Title as="p">210</Title>
          </div>
        </LevelItem>
        <LevelItem style={style}>
          <div>
            <Title as="p" title>
              Followers
            </Title>
            <Title as="p">321</Title>
          </div>
        </LevelItem>
        <LevelItem style={style}>
          <div>
            <Title as="p" title>
              Likes
            </Title>
            <Title as="p">321K</Title>
          </div>
        </LevelItem>
      </Level>
    </Box>
  </Section>
);

export const WithBreakpoint = () =>
  // @ts-ignore
  (['mobile'] as Breakpoints[]).map((breakpoint, index) => (
    <Section key={index}>
      <Title>{breakpoint || 'Without breakpoint'}</Title>
      <Box>
        <Level as="nav" breakpoint={breakpoint}>
          <LevelItem style={style}>
            <div>
              <Title as="p" title>
                Tweets
              </Title>
              <Title as="p">3,210</Title>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Title as="p" title>
                Following
              </Title>
              <Title as="p">210</Title>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Title as="p" title>
                Followers
              </Title>
              <Title as="p">321</Title>
            </div>
          </LevelItem>
          <LevelItem style={style}>
            <div>
              <Title as="p" title>
                Likes
              </Title>
              <Title as="p">321K</Title>
            </div>
          </LevelItem>
        </Level>
      </Box>
    </Section>
  ));

export default {
  title: 'Level',
  component: Level,
  subcomponents: {
    LevelItem,
    LevelSide
  },
  decorators: [
    (Story: any) => (
      <Hero size="fullheight">
        <HeroHead as="header">
          <Container>
            <Story />
          </Container>
        </HeroHead>
      </Hero>
    )
  ]
};
