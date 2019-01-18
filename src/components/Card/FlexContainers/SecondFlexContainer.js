import React from 'react';
import { rateArrays, colorHelper} from '../helpers';
import { Stepper, FlexContainer } from '../../UI';
import RattingSection from '../RattingSection';
import { diseaseChange } from '../../../reducers/itemsReducer/actions';

const diseaseMap = d => {
  const [disease] = Object.entries(d);
  console.log(disease)
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

const SecondFlexContainer = ({ diseases }) => (
  <FlexContainer>
    {diseases.map(diseaseMap)}
  </FlexContainer>
);

export default SecondFlexContainer;
