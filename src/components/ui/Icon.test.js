import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import Icon from './Icon';

Enzyme.configure({adapter: new Adapter()});

describe('Icon components-test', () => {
    const IGLOO = 'igloo';
    test('Icon test if icon-name is passed correctly', () => {
        // Render an Icon with igloo
        const wrapper = shallow(<Icon name={IGLOO} />);
        console.log(wrapper.props().className)
        expect(wrapper.props().className).toMatch(IGLOO);
    });

    test('Icon test if onClick works', () => {
        // Render an Icon with onClick method
        const onClick = sinon.spy();
        const wrapper = shallow(<Icon name={IGLOO} onClick={onClick} />);
        console.log(wrapper.find(Icon));
        wrapper.simulate('click');
        expect(onClick.callCount).toEqual(1);
    });
});
