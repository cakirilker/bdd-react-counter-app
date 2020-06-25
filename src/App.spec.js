import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';
import Counter from "./components/Counter";

describe('App', () => {
    it('should render correctly', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
    it('renders the inner Counter', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find(Counter).length).toEqual(1);
    })
    it('passes all props to Counter', () => {
        const wrapper = mount(<App />);
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toEqual('0');
    })
    it('increments the counter', () => {
        const wrapper = mount(<App />);
        wrapper.find('button').at(0).simulate('click');
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toBe('1');
    })
    it('decrements the counter', () => {
        const wrapper = mount(<App />);
        wrapper.find('button').at(1).simulate('click');
        const counterWrapper = wrapper.find(Counter);
        expect(counterWrapper.find('p').text()).toBe('-1');
    })
})
