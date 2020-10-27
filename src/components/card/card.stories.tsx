import * as React from 'react';
import { Card, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderTitle, CardImage } from '.';
import { Content } from '../../elements/content';
import { Image } from '../../elements/image';
import { Title } from '../../elements/title';
import { Media, MediaItem } from '../../layout/media';

export const Default = () => (
  <Card>
    <CardImage size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
    <CardContent>
      <Media>
        <MediaItem as="figure" position="left">
          <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </MediaItem>
        <MediaItem>
          <Title size={4}>John Smith</Title>
          <Title subtitle size={6}>
            @johnsmith
          </Title>
        </MediaItem>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="/">@bulmaio</a>.
        <a href="/">#css</a> <a href="/">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </CardContent>
  </Card>
);

export const WithFooterActions = () => (
  <Card>
    <CardHeader>
      <CardHeaderTitle>Title</CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Media>
        <MediaItem as="figure" position="left">
          <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
        </MediaItem>
        <MediaItem>
          <Title size={4}>John Smith</Title>
          <Title subtitle size={6}>
            @johnsmith
          </Title>
        </MediaItem>
      </Media>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="/">@bulmaio</a>.
        <a href="/">#css</a> <a href="/">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </Content>
    </CardContent>
    <CardFooter>
      <CardFooterItem as="a">Yes</CardFooterItem>
      <CardFooterItem as="a">No</CardFooterItem>
      <CardFooterItem as="a">Maybe</CardFooterItem>
    </CardFooter>
  </Card>
);

const story = {
  title: 'Card',
  component: Card,
  subcomponents: {
    CardFooter,
    CardFooterItem,
    CardHeader,
    CardHeaderTitle,
    CardContent,
    CardImage
  },
  decorators: [
    (Story: any) => (
      <div style={{ margin: '0px auto', width: 450 }}>
        <Story />
      </div>
    )
  ]
};

export default story;
