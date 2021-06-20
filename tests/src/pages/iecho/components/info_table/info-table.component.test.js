import React from 'react';
import InfoTableComponent from './../../../../../../src/pages/iecho/components/info_table'
import { shallow } from 'enzyme'

describe('Test for info table component', () => {
	it('Should render component without errors', () => {
		const wrapper = shallow(<InfoTableComponent />)
		expect(wrapper).toHaveLength(1);
	})

    it('Should render correct number of rows', () => {
        const data = [{ text: 'tset', palindrome: false }, { text: 'solos', palindrome: true }]
        const wrapper = shallow(<InfoTableComponent data={data}/>)
        const rows = wrapper.find('tbody > tr')
        expect(rows).toHaveLength(2);
    })

    it('Should render table withour errors', () => {
        const wrapper = shallow(<InfoTableComponent data={[{ text: 'tset', palindrome: false }]}/>)
        const rows = wrapper.find('tbody > tr')
        const columns = rows.find('td')
        expect(columns.at(0).text()).toBe('1')
        expect(columns.at(1).text()).toBe('tset')
        expect(columns.at(2).text()).toBe('No')
    })
})
