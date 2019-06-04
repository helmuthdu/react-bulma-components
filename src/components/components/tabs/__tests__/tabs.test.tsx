import { render } from '@testing-library/react';
import * as React from 'react';
import { Tabs } from '..';
import { Tab } from '../components/tab';

describe('Tabs component', () => {
  // @ts-ignore
  it.each([[Tabs], [Tab]])('should render', Component => {
    const { asFragment } = render(<Component>Content</Component>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should concat classname in props with classname', () => {
    const { asFragment } = render(<Tabs className="other-class test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render as an html section', () => {
    const { asFragment } = render(<Tabs renderAs="section">This should be a section</Tabs>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have custom inline styles', () => {
    const { asFragment } = render(
      <Tabs renderAs="section" style={{ width: 200, zIndex: 1 }}>
        This should be a section with custom styles
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should accept a react Element as renderAs prop', () => {
    // eslint-disable-next-line react/prop-types
    const Custom = ({ children, ...props }: any) => (
      <li {...props}>
        Custom
        {children}
      </li>
    );
    const { asFragment } = render(<Tabs renderAs={Custom}>This should be a li element</Tabs>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render propertly Inside Tabs', () => {
    const { asFragment } = render(
      <Tabs>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
