// @flow
import React, { type StatelessFunctionalComponent} from 'react';
import { rateArrays, colorHelper} from '../helpers';
import { Stepper, FlexContainer } from '../../UI';
import RattingSection from '../RattingSection';

const diseaseMap = (d: Object): StatelessFunctionalComponent => {
  const [disease] = Object.entries(d);
  return (
    <RattingSection
      key={disease.join('-')}
      title={disease[0]}
      value={disease[1]}
      Component={() =>
        Stepper({
          backolor: colorHelper[disease[1]],
          steps: rateArrays[disease[1]]
      })}
    />
  )
}

const SecondFlexContainer = ({ diseases }: Array<Object>) => (
  <FlexContainer>
    {diseases.map(diseaseMap)}
  </FlexContainer>
);

export default SecondFlexContainer;
