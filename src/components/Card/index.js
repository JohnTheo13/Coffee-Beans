import React from 'react';
import Header from '../Header';
import { StyledCard } from './Styled';
import { FirstFlexContainer, SecondFlexContainer } from './FlexContainers';

const Card = ({
  name,
  description,
  disease_resistance,
  ...props
}) => (
  <StyledCard>
    <Header header={name} />
    <p>{description}</p>
    <h2>Properties</h2>
    <FirstFlexContainer {...props} />
    <h2>Disease Resistance</h2>
    <SecondFlexContainer diseases={disease_resistance} />
  </StyledCard>
);

export default Card;
