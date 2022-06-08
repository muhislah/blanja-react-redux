import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../component/modul/Logo'
import style from './style.module.css'

const NotFound = () => {
  return (
    <div className={style.container}>
       <Logo />
       <h1>Sorry !! Page Not Found</h1>
       <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default NotFound