// @flow

import React from 'react';
import styled from 'styled-components';

const StepperStyled = styled.div`
  width: 100%;
  height: ${({ theme: { whitespaceS } }) => whitespaceS};
  margin: ${({ theme: { whitespaceS } }) => whitespaceS} 0;
  display: inline-flex;
`;

StepperStyled.defaultProps = {
  theme: { whitespaceS: '12px' }
};

const Line = styled.div`
  height: 5px;
  border-radius: 4px;
  width: 22%;
  margin: 3px;
  background-color: ${({ backolor, theme }) => backolor ? theme[backolor] : theme['grey'] };
`;

type StepperType = {
  steps: Array<boolean>,
  backolor: string
};

const Stepper = ({ steps, backolor}: StepperType) => (
    <StepperStyled>
      {steps.map((step, i) => <Line key={`${step.toString()}-${i}`} backolor={step && backolor} />)}
    </StepperStyled>
  );

export default Stepper;
