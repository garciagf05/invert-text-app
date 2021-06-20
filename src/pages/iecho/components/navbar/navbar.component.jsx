import React from 'react'
import './navbar.style.css'

function NavbarComponent() {
  return (
    <nav class="navbar navbar-light">
      <form className="w-100">
        <div className="row">
          <div className="col-sm-5 offset-sm-3 mb-1">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Escribe la palabra que deseas invertir"
              aria-label="Invert"
              aria-describedby="invert-text"
            />
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary btn-md"
              type="submit">
              Invertir
            </button>
          </div>
        </div>
      </form>
    </nav>
  )
}

export default NavbarComponent;