import React from 'react';

import Clock from './Clock';

import {getTime} from "../../helpers/timeHelper";

import {shallow, render, mount} from 'enzyme';

jest.useFakeTimers();

describe(('Should render correctly:'), () => {
    test('Should render correctly:', () => {
        const component = mount(<Clock/>);

        expect(component.exists()).toBe(true);
        expect(component).toMatchSnapshot();
    });

    test('test', () => {
        const component = shallow(<Clock/>);

        expect(component.state()).toEqual({
            time: null,
            binary: []
        });

        jest.advanceTimersByTime(1000);

        expect(component.state().time).not.toBe(null);
        expect(component.state().binary.length).not.toBe(0);
    });

    it('invokes clears timeout on componentDidMount', () => {
        const component = shallow(<Clock/>);

        component.unmount();

        expect(clearTimeout).toHaveBeenCalledTimes(1);
    });
});
