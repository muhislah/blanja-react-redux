import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../component/modul/Header'
import SellerSidebar from '../../component/modul/SellerSidebar'
import style from './style.module.css'

const Seller = () => {
  return (
    <>
       <Header />
       <div className={style.wrapper} >
          <Outlet />
       </div>
       <SellerSidebar />
    </>
  )
}

export default Seller