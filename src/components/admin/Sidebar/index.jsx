import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/index3.html" className="brand-link">
            <img src="/assets/images/200x200_logo_digichain.png" alt="Digichain Logo" className="brand-image img-circle elevation-3" style={{ opacity: .8 }} />
            <span className="brand-text font-weight-light">Digichain</span>
            </a>

            <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                <i className="fas fa-user-alt text-white img-circle elevation-2" alt="User Image"></i>
                </div>
                <div className="info">
                <a href="#" className="d-block">Administrator</a>
                </div>
            </div>

            <div className="form-inline">
                <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                    <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw"></i>
                    </button>
                </div>
                </div>
            </div>

            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to="/admin/token" className="nav-link">
                        <i className="nav-icon fas fa-coins"></i>
                        <p>
                            Token
                        </p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/admin/launchpad" className="nav-link">
                        <i className="nav-icon fas fa-th"></i>
                        <p>
                            Launchpad
                        </p>
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar
