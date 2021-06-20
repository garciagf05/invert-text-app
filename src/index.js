import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import IechoPage from './pages/iecho';
import { Provider } from 'react-redux'
import configureStore from './flux'


ReactDOM.render(
  <Provider store={configureStore()}>
      <IechoPage />
  </Provider>,
  document.getElementById('root')
)