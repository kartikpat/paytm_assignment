import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterPill from './index';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<FilterPill label="Dummy Data" />);
});

describe('<FilterPill /> rendering', () => {
    it('should change the state selected when onClick function of the filter pill is invoked', () => {
        wrapper.props().onClick();
        expect(wrapper.props().selected).toEqual(true);
    });
});
