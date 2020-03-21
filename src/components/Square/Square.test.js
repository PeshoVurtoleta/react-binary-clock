import React from 'react';

import Square from './Square';

import {shallow} from 'enzyme';

describe(('Should render correctly:'), () => {
    test('Should render correctly:', () => {
        const component = shallow(<Square />);

        expect(component.exists()).toBeTruthy();
        expect(component).toMatchSnapshot();
    });

    test('Should render correctly with all modifiers:', () => {
        const on = true;
        const row = 3;
        const column = 2;
        const number = 4;

        const component = shallow(<Square {...{on, row, column, number}} />);

        expect(component).toMatchSnapshot();
    });

    test('Should render correctly with no row:', () => {
        const on = true;
        const column = 2;
        const number = 4;

        const component = shallow(<Square {...{on, column, number}} />);

        expect(component).toMatchSnapshot();
    });
});