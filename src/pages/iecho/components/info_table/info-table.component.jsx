import React from 'react'
import './info-table.style.css'

function InfoTableComponent(props) {
  const { data = [] } = { ...props }

  const buildTableHead = () => {
    return (
      <tr>
        <th scope="col">#</th>
        <th scope="col">Resultado</th>
        <th scope="col">Palindromo</th>
      </tr>
    )
  }

  const buildTableBody = () => data.map((resp, index) => {
    const { text, palindrome } = { ...resp }
    const isPalindrome = palindrome ? 'Si' : 'No'
    const key = index.toString()
    return (
      <tr key={key}>
        <td>{index + 1}</td>
        <td>{text}</td>
        <td>{isPalindrome}</td>
      </tr>
    )
  })

  const buildTable = () => {
    return (
      <table className="table table-striped">
          <thead>
            {buildTableHead()}
          </thead>
          <tbody>
            {buildTableBody()}
          </tbody>
        </table>
    )
  }

  return (
    <div className="row justify-content-center">
      <div className="col-sm-9 iecho-table">
        {buildTable()}
      </div>
    </div>
  )
}

export default InfoTableComponent;