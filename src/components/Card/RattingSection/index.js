import React from 'react';
import { SectionContainer } from '../Styled';
import { Border } from '../../UI';

const RattingSection = ({ title, value, Component}) => (
  <SectionContainer>
    <Border />
    <h4>{title.replace('_', ' ').replace('_', ' ').toUpperCase()}</h4>
    <p>{value.replace('_', ' ').toLowerCase()}</p>
    <Component />
  </SectionContainer>
);

export default RattingSection;
