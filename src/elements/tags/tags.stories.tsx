import * as React from 'react';
import { Tag, Tags } from '.';
import { Control, Field } from '../../form';

export const Default = () => <Tag>Tag Text</Tag>;

export const GroupTags = () => (
  <Tags>
    <Tag close color="primary">
      Tag Text
    </Tag>
    <Tag close color="success">
      Tag Text
    </Tag>
    <Tag close color="danger">
      Tag Text
    </Tag>
    <Tag close color="warning">
      Tag Text
    </Tag>
    <Tag close color="info">
      Tag Text
    </Tag>
  </Tags>
);

export const GroupTagsWithoutGap = () => (
  <div>
    <Tags gapless>
      <Tag ellipsis>Very long tag with some</Tag>
      <Tag color="primary">Tag Text</Tag>
    </Tags>
    <Tags gapless>
      <Tag color="danger">Delete</Tag>
      <Tag remove color="warning" as="a" />
    </Tags>
  </div>
);

export const GroupTagsWithoutGapMultiline = () => (
  <div>
    <Field multiline context="group">
      <Control>
        <Tags gapless>
          <Tag color="dark">npm</Tag>
          <Tag color="info">V 5.3</Tag>
        </Tags>
      </Control>
      <Control>
        <Tags gapless>
          <Tag color="dark">Build</Tag>
          <Tag color="success">Pass</Tag>
        </Tags>
      </Control>
      <Control>
        <Tags gapless>
          <Tag color="dark">Chat</Tag>
          <Tag color="primary">Slack</Tag>
        </Tags>
      </Control>
    </Field>
  </div>
);

export const RoundedAndRemoveTag = () => (
  <Tags>
    <Tag rounded>Rounded</Tag>
    <Tag remove> </Tag>
  </Tags>
);

export default {
  title: 'Tag',
  component: Tag,
  subcomponents: {
    Tags
  },
  decorators: [
    (Story: any) => (
      <div style={{ margin: 10 }}>
        <Story />
      </div>
    )
  ]
};
