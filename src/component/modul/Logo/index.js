import React from 'react'
import logo from './logo.svg'
import {useNavigate} from 'react-router-dom'
import style from './style.module.css'

const Logo = () => {
   const navigate = useNavigate()
  return (
    <div className={style.logo} onClick={() => navigate('/')}>
       <img src={logo} alt='logo'/>
       <p className={style.logop}>Blanja</p>
    </div>
  )
}

export default Logo