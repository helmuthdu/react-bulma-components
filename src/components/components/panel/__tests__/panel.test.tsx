import { render } from '@testing-library/react';
import * as React from 'react';
import { PanelBlock, PanelHeader, PanelIcon, PanelTabs } from '../components';
import { PanelTabsTab } from '../components/panel-tabs/components';
import { Panel } from '../panel';

describe('Panel component', () => {
  it.each([[Panel], [PanelBlock], [PanelHeader], [PanelIcon], [PanelTabs], [PanelTabsTab]])(
    'should render',
    // @ts-ignore
    Component => {
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    }
  );
  it('should render with all', () => {
    const { asFragment } = render(
      <Panel>
        <PanelHeader>repositories</PanelHeader>
        <PanelBlock>
          <div>Control</div>
        </PanelBlock>
        <PanelTabs className="panel-tabs">
          <PanelTabsTab active>all</PanelTabsTab>
          <PanelTabsTab>public</PanelTabsTab>
          <PanelTabsTab>private</PanelTabsTab>
          <PanelTabsTab>sources</PanelTabsTab>
          <PanelTabsTab>forks</PanelTabsTab>
        </PanelTabs>
        <PanelBlock renderAs="a" active>
          <PanelIcon>
            <i className="fa fa-bars" />
          </PanelIcon>
          bulma
        </PanelBlock>
        <PanelBlock renderAs="label" className="panel-block">
          <input type="checkbox" />
          remember me
        </PanelBlock>
        <PanelBlock>
          <button type="button">reset all filters</button>
        </PanelBlock>
      </Panel>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
