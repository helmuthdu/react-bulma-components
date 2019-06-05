import { render } from '@testing-library/react';
import * as React from 'react';
import { Panel, PanelBlock, PanelHeader, PanelIcon, PanelTabs, PanelTab } from '..';

describe('Panel component', () => {
  it.each([[Panel], [PanelBlock], [PanelHeader], [PanelIcon], [PanelTabs], [PanelTab]])(
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
          <PanelTab active>all</PanelTab>
          <PanelTab>public</PanelTab>
          <PanelTab>private</PanelTab>
          <PanelTab>sources</PanelTab>
          <PanelTab>forks</PanelTab>
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
