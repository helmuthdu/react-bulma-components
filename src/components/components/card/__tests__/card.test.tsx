import { render } from '@testing-library/react';
import * as React from 'react';
import { Card } from '..';
import { CardContent, CardFooter, CardImage } from '../components';
import { CardFooterItem } from '../components/card-footer/components';
import { CardHeader } from '../components/card-header';
import { CardHeaderIcon, CardHeaderTitle } from '../components/card-header/components';

describe('Card component', () => {
  it.each([[Card], [CardContent], [CardFooter], [CardHeader]])('should render', Component => {
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render card-image', () => {
    const { asFragment } = render(<CardImage size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render card-header', () => {
    const { asFragment } = render(
      <Card>
        <CardHeader>
          <CardHeaderTitle>Title</CardHeaderTitle>
          <CardHeaderIcon>
            <i className="icon" />
          </CardHeaderIcon>
        </CardHeader>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render card-footer', () => {
    const { asFragment } = render(
      <Card>
        <CardFooter>
          <CardFooterItem>Yes</CardFooterItem>
          <CardFooterItem>No</CardFooterItem>
        </CardFooter>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
