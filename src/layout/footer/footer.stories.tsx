import * as React from 'react';
import { Footer } from '.';
import { Content } from '../../elements/content';
import { Container } from '../container';
import { Hero, HeroBody, HeroFoot, HeroHead } from '../hero';

export const Default = () => (
  <Hero size="fullheight">
    <HeroHead as="header" />
    <HeroBody />
    <HeroFoot>
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
    </HeroFoot>
  </Hero>
);

const story = {
  title: 'Footer',
  component: Footer
};

export default story;
