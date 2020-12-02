import * as React from 'react';
import { Media, MediaItem } from '.';
import { Box } from '../../elements/box';
import { Button } from '../../elements/button';
import { Content } from '../../elements/content';
import { Image } from '../../elements/image';
import { Control, Field, Textarea } from '../../form';
import { Level, LevelSide } from '../level';
import { Section } from '../section';

const style = { background: '#e6e6e6', width: 64, height: 64 };

export const Default = () => (
  <Section>
    <Box>
      <Media>
        <MediaItem as="figure" position="left">
          <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </MediaItem>
        <MediaItem>
          <Content>
            <p>
              <strong>John Smith</strong>
              <small>@johnsmith</small>
              <small>31m</small>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
              vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </Content>
          <Level breakpoint="mobile">
            <LevelSide align="left">
              <Button link>Like</Button>
              <Button link>Share</Button>
            </LevelSide>
          </Level>
        </MediaItem>
        <MediaItem position="right">
          <button className="delete" />
        </MediaItem>
      </Media>
    </Box>
  </Section>
);

export const RightMedia = () => (
  <Section>
    <Box>
      <Media>
        <MediaItem>
          <p>Lorem Ipsum</p>
        </MediaItem>
        <MediaItem as="figure" position="right">
          <img style={style} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </MediaItem>
      </Media>
    </Box>
  </Section>
);

export const Nested = () => (
  <Section>
    <Box>
      <Media as="article">
        <MediaItem position="left">
          <Image src="http://bulma.io/images/placeholders/128x128.png" size={64} />
        </MediaItem>
        <MediaItem position="center">
          <Content>
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit
              non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br />
              <small>
                <a href="/">Like</a> · <a href="/">Reply</a> · 3 hrs
              </small>
            </p>
          </Content>

          <Media>
            <MediaItem position="left">
              <Image src="http://bulma.io/images/placeholders/128x128.png" size={48} />
            </MediaItem>
            <MediaItem position="center">
              <Content>
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus
                  et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo
                  feugiat.
                  <br />
                  <small>
                    <a href="/">Like</a> · <a href="/">Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>

              <Media>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
                massa.
              </Media>

              <Media>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
                euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </Media>
            </MediaItem>
          </Media>

          <Media>
            <MediaItem position="left">
              <Image src="http://bulma.io/images/placeholders/96x96.png" size={48} />
            </MediaItem>
            <MediaItem position="center">
              <Content>
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna
                  vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a href="/">Like</a> · <a href="/">Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
            </MediaItem>
          </Media>
        </MediaItem>
      </Media>
      <Media as="article">
        <MediaItem position="left">
          <Image src="http://bulma.io/images/placeholders/128x128.png" size={64} />
        </MediaItem>
        <MediaItem position="center">
          <Field>
            <Control as="p">
              <Textarea placeholder="Add a comment..." onChange={() => void 0} />
            </Control>
          </Field>
          <Field>
            <Control as="p">
              <Button>Post comment</Button>
            </Control>
          </Field>
        </MediaItem>
      </Media>
    </Box>
  </Section>
);

const story = {
  title: 'Media',
  component: Media,
  subcomponents: {
    MediaItem
  }
};

export default story;
