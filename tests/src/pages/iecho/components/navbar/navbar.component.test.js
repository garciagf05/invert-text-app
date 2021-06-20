import React from 'react';
import NavbarComponent from './../../../../../../src/pages/iecho/components/navbar'
import { shallow } from 'enzyme'

describe('Test for navbar component', () => {
	it('Should render component without errors', () => {
		const wrapper = shallow(<NavbarComponent />)
		expect(wrapper).toHaveLength(1);
	})
})