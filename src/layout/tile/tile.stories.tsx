import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tile } from '.';
import { Box } from '../../elements/box';
import { Image } from '../../elements/image';
import { Title } from '../../elements/title';
import { Section } from '../section';

storiesOf('Tile', module).add('Default', () => (
  <Section>
    <Box>
      <Tile context="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile context="parent" vertical>
              <Tile as="article" context="child" notification color="primary">
                <Title>Vertical...</Title>
                <Title subtitle>Top tile</Title>
              </Tile>
              <Tile as="article" context="child" notification color="warning">
                <Title>Tiles...</Title>
                <Title subtitle>Bottom Tile...</Title>
              </Tile>
            </Tile>
            <Tile context="parent">
              <Tile as="article" context="child" notification color="info">
                <Title>Middle Tile...</Title>
                <Title subtitle>With image Tile...</Title>
                <Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" />
              </Tile>
            </Tile>
          </Tile>
          <Tile context="parent">
            <Tile as="article" context="child" notification color="danger">
              <Title>Wide tile</Title>
              <Title subtitle>Aligned with the right tile</Title>
              <div className="content" />
            </Tile>
          </Tile>
        </Tile>
        <Tile context="parent">
          <Tile as="article" context="child" notification color="success">
            <div className="content">
              <Title>Tall tile</Title>
              <Title subtitle>With even more content</Title>
              <div className="content" />
            </div>
          </Tile>
        </Tile>
      </Tile>
    </Box>
  </Section>
));
