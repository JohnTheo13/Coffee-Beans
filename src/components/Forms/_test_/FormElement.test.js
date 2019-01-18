import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormElement from '../FormElement';
import { Select } from '../Select';

Enzyme.configure({ adapter: new Adapter() })

describe('components', () => {
  describe('FormElement', () => {
    const props = {
      options: [1,3,5],
      onChange: jest.fn(),
      name: 'name',
      placeholder: 'placeholder',
      label: 'label',
      Component: Select
    }
    const wrapper = shallow(<FormElement {...props}  />);

    it('should render label', () => {
      expect(wrapper.dive().childAt(0).props()).toEqual({htmlFor: props.name, children: 'label'})
    });
  })
})