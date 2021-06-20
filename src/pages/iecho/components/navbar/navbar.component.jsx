import React, { useState } from 'react'
import './navbar.style.css'

function NavbarComponent(props) {
  const { onInvert = () => {} } = { ...props }
  const [inputValue, setInputValue] = useState('')

  return (
    <nav className="navbar navbar-ligh mb-5">
      <form className="w-100">
        <div className="row">
          <div className="col-sm-5 offset-sm-3 mb-1">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Escribe la palabra que deseas invertir"
              aria-label="Invert"
              aria-describedby="invert-text"
              onChange={event => setInputValue(event.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary btn-md"
              type="button"
              onClick={() => onInvert(inputValue)}>
              Invertir
            </button>
          </div>
        </div>
      </form>
    </nav>
  )
}

export default NavbarComponent;