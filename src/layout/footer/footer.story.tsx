import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Footer } from '.';
import { Content } from '../../elements/content';
import { Container } from '../container';
import { Hero, HeroBody, HeroFooter, HeroHeader } from '../hero';

storiesOf('Footer', module).add('Default', () => (
  <Hero size="fullheight">
    <HeroHeader as="header" />
    <HeroBody />
    <HeroFooter>
      <Footer>
        <Container>
          <Content style={{ textAlign: 'center' }}>
            <p>
              <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed{' '}
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
          </Content>
        </Container>
      </Footer>
    </HeroFooter>
  </Hero>
));
