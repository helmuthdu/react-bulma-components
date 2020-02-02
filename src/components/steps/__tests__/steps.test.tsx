import { render } from '@testing-library/react';
import * as React from 'react';
import { StepDetails } from '../step-details';
import { StepTitle } from '../step-title';
import { Steps } from '../steps';
import { StepItem } from '../step-item';
import { StepMark } from '../step-mark';

describe('Steps component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Steps>
        <StepItem>
          <StepMark>1</StepMark>
        </StepItem>
        <StepItem>
          <StepMark>2</StepMark>
          <StepDetails>
            <StepTitle>Step 2</StepTitle>
            <p>This is the second step. You get here once you have completed the first step.</p>
          </StepDetails>
        </StepItem>
        <StepItem>
          <StepMark>3</StepMark>
        </StepItem>
      </Steps>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
