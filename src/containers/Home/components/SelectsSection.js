// @flow
import React from 'react';
import styled from 'styled-components';
import { FormElement, Select} from '../../../components/Forms';
import { connect } from 'react-redux';
import { diseaseList } from '../diseaeseList';
import { varieties } from '../../../reducers/itemsReducer/helpers';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

/**
 * To prevent the hole section from rerenderin
 */
const Varieties = connect(({ items:{ activeList } }) => ({ options: activeList.map(varieties) }))(FormElement);

type Selects = {
  countriesList: Array<string>,
  countryChange: Function,
  diseaseChange: Function,
  clear: Function,
  activeChanged: Function
}

const SelectsSections = ({
  countriesList,
  countryChange,
  diseaseChange,
  clear,
  activeChanged
 }: Selects) => {

  const onChange = e => {
    e.preventDefault();
    const { target: { name, value } } = e;
    
    if (value == 0) { // eslint-disable-line
      clear(name.toUpperCase());
    } else {
      switch (name) {
        case 'country': {
          countryChange(value);
          break;
        }
        case 'disease':
          diseaseChange(value);
          break;
        case 'active':
          activeChanged(value)
          break;
        default:
          break;
      }
    }
  }

  return (
    <FlexContainer>
      <FormElement
        options={countriesList}
        name="country"
        onChange={onChange}
        placeholder="- Countries - "
        label="Countries:"
        Component={Select}
      />
      <FormElement
        options={diseaseList}
        name="disease"
        onChange={onChange}
        placeholder="- Diseases - "
        label="Disease Resistances:"
        Component={Select}
      />
      <Varieties
        name="active"
        onChange={onChange}
        placeholder="- Available Varieties - "
        label="Varieties:"
        Component={Select}
      />
    </FlexContainer>
  )
};

export default SelectsSections;
