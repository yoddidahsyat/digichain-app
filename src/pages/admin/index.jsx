import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Sidebar, Footer } from '../../components/admin'

const Admin = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Admin