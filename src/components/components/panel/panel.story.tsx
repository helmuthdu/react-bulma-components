import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Panel, PanelBlock, PanelHeader, PanelIcon, PanelTabs, PanelTab } from '.';
import { Button } from '../../elements/button';
import { Icon } from '../../elements/icon';
import { Checkbox, Control, Input } from '../../form';

storiesOf('Panel', module)
  .addDecorator(story => <div style={{ margin: 10 }}>{story()}</div>)
  .add('Default', () => (
    <Panel>
      <PanelHeader>repositories</PanelHeader>
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
      <PanelBlock renderAs="a" active>
        <PanelIcon renderAs={Icon} icon="angle-down" />
        bulma
      </PanelBlock>
      <PanelBlock>
        <PanelIcon renderAs={Icon} icon="angle-down" />
        react-bulma-components
      </PanelBlock>
      <PanelBlock>
        <PanelIcon renderAs={Icon} icon="angle-down" />
        minireset.css
      </PanelBlock>
      <PanelBlock>
        <PanelIcon renderAs={Icon} icon="angle-down" />
        jgthms.github.io
      </PanelBlock>
      <PanelBlock>
        <PanelIcon renderAs={Icon} icon="angle-down" />
        couds.gidhub.io
      </PanelBlock>
      <PanelBlock>
        <PanelIcon renderAs={Icon} icon="angle-down" />
        mojs
      </PanelBlock>
      <PanelBlock renderAs="label" className="panel-block">
        <Checkbox onChange={() => {}} />
        remember me
      </PanelBlock>
      <PanelBlock>
        <Button fullwidth color="link" outlined>
          reset all filters
        </Button>
      </PanelBlock>
    </Panel>
  ));
