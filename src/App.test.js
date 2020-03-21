import React from 'react';

import App from './App';

import {shallow} from 'enzyme';

test('Should render correctly:', () => {
    const component = shallow(<App/>);

    expect(component.exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
});
