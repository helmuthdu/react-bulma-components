import { select } from '@storybook/addon-knobs';
import * as React from 'react';
import { Panel, PanelBlock, PanelHeading, PanelIcon, PanelTab, PanelTabs } from '.';
import { Button } from '../../elements/button';
import { Icon } from '../../elements/icon';
import { Checkbox, Control, Input } from '../../form';

export const Default = () => (
  <Panel
    color={select(
      'color',
      {
        black: 'black',
        danger: 'danger',
        dark: 'dark',
        info: 'info',
        light: 'light',
        link: 'link',
        primary: 'primary',
        success: 'success',
        warning: 'warning',
        white: 'white'
      },
      'primary'
    )}>
    <PanelHeading>repositories</PanelHeading>
    <PanelBlock>
      <Control>
        <Input size="small" type="text" placeholder="search" onChange={() => {}} />
      </Control>
    </PanelBlock>
    <PanelTabs className="panel-tabs">
      <PanelTab active>all</PanelTab>
      <PanelTab>public</PanelTab>
      <PanelTab>private</PanelTab>
      <PanelTab>sources</PanelTab>
      <PanelTab>forks</PanelTab>
    </PanelTabs>
    <PanelBlock as="a" active>
      <PanelIcon as={Icon} icon="angle-down" />
      bulma
    </PanelBlock>
    <PanelBlock>
      <PanelIcon as={Icon} icon="angle-down" />
      react-bulma-components
    </PanelBlock>
    <PanelBlock>
      <PanelIcon as={Icon} icon="angle-down" />
      minireset.css
    </PanelBlock>
    <PanelBlock>
      <PanelIcon as={Icon} icon="angle-down" />
      jgthms.github.io
    </PanelBlock>
    <PanelBlock>
      <PanelIcon as={Icon} icon="angle-down" />
      couds.gidhub.io
    </PanelBlock>
    <PanelBlock>
      <PanelIcon as={Icon} icon="angle-down" />
      mojs
    </PanelBlock>
    <PanelBlock as="label" className="panel-block">
      <Checkbox onChange={() => {}} />
      remember me
    </PanelBlock>
    <PanelBlock>
      <Button fullwidth color="link" outlined>
        reset all filters
      </Button>
    </PanelBlock>
  </Panel>
);

export default {
  title: 'Panel',
  component: Panel,
  subcomponents: {
    PanelBlock,
    PanelHeading,
    PanelIcon,
    PanelTab,
    PanelTabs
  },
  decorators: [
    (Story: any) => (
      <div style={{ margin: 10 }}>
        <Story />
      </div>
    )
  ]
};
