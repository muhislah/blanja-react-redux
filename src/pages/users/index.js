import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../component/modul/Header'
import Sidebar from '../../component/modul/Sidebar'
import style from './style.module.css'

const Users = () => {
  return (
    <>
      <Header/>
      <Sidebar />
      <div className={style.container}>
        <Outlet />
      </div>
     
    </>
  )
}

export default Users