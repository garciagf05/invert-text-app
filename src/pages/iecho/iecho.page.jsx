import React, { useState } from 'react'
import NavbarComponent from './components/navbar';
import InfoTableComponent from './components/info_table';
import constants from '../../constants';
import _ from './../../utilities'
import './iecho.style.css'


function IechoPage() {
  const [responses, setResponses] = useState([])

  const onFetchSucces = (resp = {}) => {
    const { data = {} } = { ...resp }
    const auxResponses = [...responses]
    auxResponses.unshift(data)
    setResponses(auxResponses)
  }
  
  const onFetchError = (error = {}) => {
    console.log('error', error)
  }
  
  const onInvert = (text = "") => {
    const { api: { basePath, inverTextPath } } = {  ...constants }
    const { fetchApi } = { ..._ }
    const apiUrl = `${basePath}${inverTextPath}?text=${text}`
    !!text && fetchApi.GET(apiUrl)
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

export default IechoPage;