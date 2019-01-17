// @flow
/**
* Generic Selec input only accepts array
* Reusability depends on the expected data structure
*/
import React from 'react';
import styled from 'styled-components';

type selectType = {
  options: Array<string | number>,
  onChange: Function,
  placeholder: string,
  name: string,
  formName: string };

const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 24px;
  background-image: url('images/arrow_up_down.svg');
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: 50%;
  background-size: 10px;
  border-radius: 3px;
  padding-left: 12px;
  font-size: 14px;
  height: 2.3em;
  &:focus {
    border-color: #f5a623;
    outline: 0;
  }
`,
  SelectInput = ({ options, onChange, placeholder = '', name, formName = '' }: selectType) => (
    <StyledSelect onChange={onChange} name={name} form={formName}>
      {!!placeholder
      && <option value={0}>{placeholder}</option>}
      {options.map(option => <option key={option} value={option}>{option}</option>)}
    </StyledSelect>
  );

export default SelectInput;
