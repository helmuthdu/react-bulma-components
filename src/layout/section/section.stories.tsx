import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Section } from '.';
import { Title } from '../../elements/title';
import { Container } from '../container';

storiesOf('Section', module)
  .add('Default', () => (
    <div>
      <Section>
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section>
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
    </div>
  ))
  .add('Medium', () => (
    <div>
      <Section size="medium">
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section size="medium">
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section size="medium">
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
    </div>
  ))
  .add('Large', () => (
    <div>
      <Section size="large">
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section size="large">
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
      <Section size="large">
        <Container>
          <Title>Section</Title>
          <Title subtitle>
            A simple container to divide your page into <strong>sections</strong>, like the one you are currently
            reading
          </Title>
        </Container>
      </Section>
    </div>
  ));
