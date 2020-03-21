import React from 'react';

import Time from './Time';

import {shallow} from 'enzyme';

test('Should render correctly:', () => {
    const component = shallow(<Time />);

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
});
