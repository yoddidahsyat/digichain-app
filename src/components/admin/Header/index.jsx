import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../utils/AppContext'

const Header = () => {
  const [state, dispatch] = useContext(AppContext)
  const navigate = useNavigate

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT'
    })
    navigate('/admin/login')
  }

  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Home</a>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
          <i className="fas fa-search"></i>
        </a>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <li className="nav-item nav-dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          <i className="fas fa-user"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-right mr-3">
          <li className="dropdown-item">
            <i className="fas fa-sign-out-alt"></i>
            <a href='#' onClick={handleLogout} className="text-dark ml-2">Log out</a>
          </li>
        </ul>
      </li>

    </ul>
  </nav>
  )
}

export default Header