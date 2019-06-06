import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tag, Tags } from '.';
import { Control, Field } from '../../form';

storiesOf('Tag', module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => <Tag>Tag Text</Tag>)
  .add('Group Tags', () => (
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
  ))
  .add('Group Tags without gap', () => (
    <div>
      <Tags gapless>
        <Tag ellipsis>Very long tag with some</Tag>
        <Tag color="primary">Tag Text</Tag>
      </Tags>
      <Tags gapless>
        <Tag color="danger">Delete</Tag>
        <Tag remove color="warning" renderAs="a" />
      </Tags>
    </div>
  ))
  .add('Group Tags without gap multiline', () => (
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
  ))
  .add('Others', () => (
    <Tags>
      <Tag rounded>Rounded</Tag>
      <Tag remove> </Tag>
    </Tags>
  ));
