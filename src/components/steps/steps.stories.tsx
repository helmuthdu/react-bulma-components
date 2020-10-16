import * as React from 'react';
import { StepItem, StepMark, Steps } from '.';
import { StepDetails } from './step-details';
import { StepTitle } from './step-title';

export const Default = () => (
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

const story = {
  title: 'Steps',
  component: Steps,
  subcomponents: {
    StepItem,
    StepMark,
    StepDetails,
    StepTitle
  }
};

export default story;
