import React from 'react'
import style from './style.module.css'
import bell from './bell.svg'
import cart from './cart.svg'
import message from './message.svg'
import profile from './profile.jpg'
import { useNavigate } from 'react-router-dom'

function Navbar({type}) {
  const navigate =  useNavigate()
  if (type === 'login'){
    return (
      <div className={style.navbar}>
         <img src={cart} onClick={() => navigate('/mybag')} alt='Cart'/>
         <img src={bell} alt='Notification'/>
         <img src={message} alt='Chat'/>
         <img src={profile} className={style.imgProfile} alt='Profile' onClick={() => navigate('/users/profile')} />
      </div>
    )
  }else {
    return (
      <div className={style.navbar}>
        <button className={style.login} onClick={() => navigate('/auth/login')}>Login</button>
        <button className={style.signup} onClick={() => navigate('/auth/register')}>Signup</button>
      </div>
    )
  }
  
}

export default Navbar