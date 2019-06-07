import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { CSSProperties } from 'react';
import { Column, Columns } from '.';
import { Box } from '../elements/box';
import { Heading } from '../elements/heading';
import { Container } from '../layout/container';
import CONSTANTS from './constants';

const style: CSSProperties = {
  borderRadius: '3px',
  padding: '1rem 0',
  position: 'relative',
  textAlign: 'center'
};

storiesOf('Columns', module)
  .add('Basic', () => (
    <Container fluid padding="medium">
      <Columns>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            First Column
          </div>
        </Column>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            Second Column
          </div>
        </Column>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            Third Column
          </div>
        </Column>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            Fourth Column
          </div>
        </Column>
      </Columns>
    </Container>
  ))
  .add('Sizes by name', () => (
    <Container fluid padding="medium">
      {Object.keys(CONSTANTS.SIZES).map((size: string) => (
        <Columns key={size}>
          <Column size={(CONSTANTS.SIZES as any)[size]}>
            <div className="has-background-grey-lighter" style={style}>
              {(CONSTANTS.SIZES as any)[size]}
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Auto
            </div>
          </Column>
        </Columns>
      ))}
    </Container>
  ))
  .add('Sizes by 12 Columns', () => (
    <Container fluid padding="medium">
      <Columns>
        <Column size={1}>
          <div className="has-background-primary" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={2}>
          <div className="has-background-primary" style={style}>
            size-2
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={3}>
          <div className="has-background-primary" style={style}>
            size-3
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={4}>
          <div className="has-background-primary" style={style}>
            size-4
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={5}>
          <div className="has-background-primary" style={style}>
            size-5
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={6}>
          <div className="has-background-primary" style={style}>
            size-6
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={7}>
          <div className="has-background-primary" style={style}>
            size-7
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={8}>
          <div className="has-background-primary" style={style}>
            size-8
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={9}>
          <div className="has-background-primary" style={style}>
            size-9
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={10}>
          <div className="has-background-primary" style={style}>
            size-10
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={11}>
          <div className="has-background-primary" style={style}>
            size-11
          </div>
        </Column>
        <Column size={1}>
          <div className="has-background-grey-lighter" style={style}>
            size-1
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={12}>
          <div className="has-background-primary" style={style}>
            size-12
          </div>
        </Column>
      </Columns>
    </Container>
  ))
  .add('With Offset', () => (
    <Container fluid padding="medium">
      <Columns>
        <Column size="half" offset="one-quarter">
          <div className="has-background-grey-lighter" style={style}>
            size half
            <br />
            offset one-quarter
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={4} offset={8}>
          <div className="has-background-grey-lighter" style={style}>
            size 4<br />
            offset 8
          </div>
        </Column>
      </Columns>

      <Columns>
        <Column size={11} offset={1}>
          <div className="has-background-grey-lighter" style={style}>
            size 11
            <br />
            offset 1
          </div>
        </Column>
      </Columns>
    </Container>
  ))
  .add('Narrow', () => (
    <Container fluid padding="medium">
      <Columns>
        <Column narrow>
          <Box style={{ width: 200 }}>
            <Heading size={5}>Narrow column</Heading>
            <Heading subtitle>This column is only 200px wide.</Heading>
          </Box>
        </Column>
        <Column>
          <Box>
            <Heading size={5}>Flexible column</Heading>
            <Heading subtitle>This column will take up the remaining space available.</Heading>
          </Box>
        </Column>
      </Columns>
    </Container>
  ))
  .add('Responsive', () => (
    <Container fluid padding="medium">
      <Box>
        <Heading size={5}>Mobile</Heading>
        <Columns breakpoint="mobile">
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              First Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Second Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Third Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Fourth Column
            </div>
          </Column>
        </Columns>
      </Box>
      <Box>
        <Heading size={5}>Tablet</Heading>
        <Columns breakpoint="tablet">
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              First Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Second Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Third Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Fourth Column
            </div>
          </Column>
        </Columns>
      </Box>
      <Box>
        <Heading size={5}>Desktop</Heading>
        <Columns breakpoint="desktop">
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              First Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Second Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Third Column
            </div>
          </Column>
          <Column>
            <div className="has-background-grey-lighter" style={style}>
              Fourth Column
            </div>
          </Column>
        </Columns>
      </Box>
    </Container>
  ))
  .add('Different column size per breakpoint', () => (
    <Container fluid padding="medium">
      <Columns breakpoint="mobile">
        <Column
          mobile={{
            size: 'three-quarters'
          }}
          tablet={{
            size: 'two-thirds'
          }}
          desktop={{
            size: 'half'
          }}
          widescreen={{
            size: 'one-third'
          }}
          fullhd={{
            size: 'one-quarter'
          }}
        >
          <div className="has-background-grey-lighter" style={style}>
            is-three-quarters-mobile
            <br />
            is-two-thirds-tablet
            <br />
            is-half-desktop is-one-third-widescreen is-one-quarter-fullhd
          </div>
        </Column>
        <Column className="column">
          <div className="has-background-grey-lighter" style={style}>
            1
          </div>
        </Column>
        <Column className="column">
          <div className="has-background-grey-lighter" style={style}>
            1
          </div>
        </Column>
      </Columns>
    </Container>
  ))
  .add('Nested', () => (
    <Container fluid padding="medium">
      <Columns>
        <Column size="half">
          <div className="has-background-grey-lighter" style={style}>
            First Column
          </div>
          <Columns>
            <Column size="one-third">
              <div className="has-background-grey-lighter" style={style}>
                First Nested Column
              </div>
            </Column>
            <Column>
              <div className="has-background-grey-lighter" style={style}>
                Second Nested Column (auto)
              </div>
            </Column>
          </Columns>
        </Column>
        <Column size="half">
          <div className="has-background-grey-lighter" style={style}>
            Second Column
          </div>
          <Columns>
            <Column size="half">
              <div className="has-background-grey-lighter" style={style}>
                First Nested Column (Half)
              </div>
            </Column>
            <Column size="one-quarter">
              <div className="has-background-grey-lighter" style={style}>
                Second Nested Column (one-quarter)
              </div>
            </Column>
            <Column>
              <div className="has-background-grey-lighter" style={style}>
                Third Nested Column (auto)
              </div>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </Container>
  ))
  .add('gapless columns', () => (
    <Container fluid padding="medium">
      <Columns gapless>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            First Column
          </div>
        </Column>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            Middle Column
          </div>
        </Column>
        <Column>
          <div className="has-background-grey-lighter" style={style}>
            Last Column
          </div>
        </Column>
      </Columns>
    </Container>
  ));
