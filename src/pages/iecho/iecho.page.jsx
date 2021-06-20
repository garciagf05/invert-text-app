import React, { useState } from 'react'
import NavbarComponent from './components/navbar';
import InfoTableComponent from './components/info_table';
import constants from '../../constants';
import _ from './../../utilities'
import './iecho.style.css'


function IechoPage(props) {
  
  const { responses = [], setResponses = () => {} } = { ...props }

  const onFetchSucces = (resp = {}) => {
    const { data = {} } = { ...resp }
    setResponses(data)
  }
  
  const onFetchError = (error = {}) => {
    const { response: { data = {}, status } } = { ...error }
    const { error: message } = { ...data  }
    const alertMessage = `Error ${status}: ${message}`
    alert(alertMessage)
  }
  
  const onInvert = (text = '') => {
    const { api: { basePath, inverTextPath } } = {  ...constants }
    const { fetchApi } = { ..._ }
    const apiUrl = `${basePath}${inverTextPath}?text=${text}`
    fetchApi.GET(apiUrl)
      .then(onFetchSucces)
      .catch(onFetchError)
  }

  return (
    <div className="container-fluid px-0">
      <NavbarComponent onInvert={onInvert} />
      <InfoTableComponent data={responses}/>
    </div>
  )
}

export default IechoPage