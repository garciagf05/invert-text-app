import React from 'react';
import IechoPage from './../../../../src/pages/iecho'
import { shallow } from 'enzyme'

describe('Test for iecho page', () => {
	it('Should render page without errors', () => {
		const wrapper = shallow(<IechoPage />)
		expect(wrapper).toHaveLength(1);
	})
})
