import React from 'react';
import IechoPage from './../../../../src/pages/iecho'
import { shallow } from 'enzyme'
import { Provider } from "react-redux";
import configureStore from './../../../../src/flux'

describe('Test for iecho page', () => {
  it('Should render page without errors', () => {
    const wrapper = shallow(
      <Provider store={configureStore()}>
        <IechoPage />
      </Provider>
    )
    expect(wrapper).toHaveLength(1);
  })
})
