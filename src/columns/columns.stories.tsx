import * as React from 'react';
import { CSSProperties } from 'react';
import { Column, Columns } from '.';
import { Box } from '../elements/box';
import { Title } from '../elements/title';
import { Container } from '../layout/container';
import CONSTANTS from './constants';

const style: CSSProperties = {
  borderRadius: '3px',
  padding: '1rem 0',
  position: 'relative',
  textAlign: 'center'
};

export default {
  title: 'Columns',
  component: Columns,
  subcomponents: [Column]
};

export const Basic = () => (
  <Container fluid padding={6}>
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
);

export const SizesByName = () => (
  <Container fluid padding={6}>
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
);

export const SizesBy12Columns = () => (
  <Container fluid padding={6}>
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
);

export const WithOffset = () => (
  <Container fluid padding={6}>
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
);

export const Narrow = () => (
  <Container fluid padding={6}>
    <Columns>
      <Column narrow>
        <Box style={{ width: 200 }}>
          <Title size={5}>Narrow column</Title>
          <Title subtitle>This column is only 200px wide.</Title>
        </Box>
      </Column>
      <Column>
        <Box>
          <Title size={5}>Flexible column</Title>
          <Title subtitle>This column will take up the remaining space available.</Title>
        </Box>
      </Column>
    </Columns>
  </Container>
);

export const Responsive = () => (
  <Container fluid padding={6}>
    <Box>
      <Title size={5}>Mobile</Title>
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
      <Title size={5}>Tablet</Title>
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
      <Title size={5}>Desktop</Title>
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
);

export const DifferentColumnSizePerBreakpoint = () => (
  <Container fluid padding={6}>
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
        }}>
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
);

export const Nested = () => (
  <Container fluid padding={6}>
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
);

export const GaplessColumns = () => (
  <Container fluid padding={6}>
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
);

export const VerticalAlignment = () => (
  <Columns vcentered>
    <Column size={8}>
      <p className="bd-notification is-primary">First column</p>
    </Column>
    <Column>
      <p className="bd-notification is-primary">
        Second column with more content. This is so you can see the vertical alignment.
      </p>
    </Column>
  </Columns>
);
