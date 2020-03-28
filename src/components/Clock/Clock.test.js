import React from 'react';

import Clock from './Clock';

import {shallow, mount} from 'enzyme';

jest.useFakeTimers();

describe(('Should render correctly:'), () => {
    test('Should render correctly:', () => {
        const component = mount(<Clock/>);

        expect(component.exists()).toBe(true);
        expect(component).toMatchSnapshot();
    });
});

describe(('Should work properly:'), () => {
    let component;

    beforeEach(() => {
        component = shallow(<Clock/>);
    });

    test('state should be set after a second:', () => {
        expect(component.state()).toEqual({
            time: null,
            binary: []
        });

        jest.advanceTimersByTime(1000);

        expect(component.state().time).not.toBe(null);
        expect(component.state().binary.length).not.toBe(0);
    });

    it('invokes clears timeout on componentDidMount', () => {
        component.unmount();

        expect(clearTimeout).toHaveBeenCalledTimes(1);
    });
});