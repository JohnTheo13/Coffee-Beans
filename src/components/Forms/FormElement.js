// @flow
import React, { type Element } from 'react';
import styled from 'styled-components';

type ElementType = {
  label: string,
  component: Element<any>,
  name: string,
  component: Function };

const StyledContainer = styled.div`
  padding: 12px 0;
  > label {
    font-weight: bold;
    font-size: .9rem;
    display: inline-block;
    margin-bottom: 12px;
    text-transform: capitalize;
  }
`,
  FormElement = ({ label, Component, name, ...props }: ElementType) => (
    <StyledContainer>
      <label htmlFor={name}>{label}</label>
      <Component { ...props } name={name}/>
    </StyledContainer>
  );

export default FormElement;
