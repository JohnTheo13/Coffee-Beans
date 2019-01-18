// @flow
import React, { type StatelessFunctionalComponent }from 'react';
import { SectionContainer } from '../Styled';
import { Border } from '../../UI';

type Ratting = {
  title: string,
  value?: string,
  Component: StatelessFunctionalComponent
}

const RattingSection = ({ title, value = '', Component }: Ratting) => (
  <SectionContainer>
    <Border />
    <h4>{title.replace('_', ' ').replace('_', ' ').toUpperCase()}</h4>
    <p>{value.replace('_', ' ').toLowerCase()}</p>
    <Component />
  </SectionContainer>
);

export default RattingSection;
