import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Message, MessageBody, MessageHeader } from '.';
import { Button } from '../../elements/button';

storiesOf('Message', module)
  .add('Default', () => (
    <Message>
      <MessageHeader>
        Title
        <Button remove />
      </MessageHeader>
      <MessageBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
        placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{' '}
        <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
        sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et
        sem eget, facilisis sodales sem.
      </MessageBody>
    </Message>
  ))
  .add('Color', () => (
    <React.Fragment>
      <Message color="info">
        <MessageHeader>
          Title
          <Button remove />
        </MessageHeader>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
          dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
          arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
          vehicula et sem eget, facilisis sodales sem.
        </MessageBody>
      </Message>
      <Message color="danger">
        <MessageHeader>
          Title
          <Button remove />
        </MessageHeader>
        <MessageBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et
          dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
          arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
          vehicula et sem eget, facilisis sodales sem.
        </MessageBody>
      </Message>
    </React.Fragment>
  ));
