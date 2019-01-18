import React from 'react';
import { SectionContainer } from '../Styled';
import { Border } from '../../UI';

const RattingSection = ({ title, value, Component}) => (
  <SectionContainer>
    <Border />
    <h4>{title}</h4>
    <p>{value}</p>
    <Component />
  </SectionContainer>
);

export default RattingSection;
