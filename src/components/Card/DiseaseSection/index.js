import React from 'react';
import { Border, Stepper } from '../../UI';
import { SectionContainer } from '../Styled';

const DiseaseSection = ({ diseaseName, value, Component}) => (
  <SectionContainer>
    <Border />
    <h4>{'diseaseName'}</h4>
    <p>{'value'}</p>
    <Component />
  </SectionContainer>
);

export default DiseaseSection;
