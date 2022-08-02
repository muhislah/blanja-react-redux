import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import bell from './bell.svg'
import cart from './cart.svg'
import message from './message.svg'
import noprofile from './noprofile.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar({type}) {
  const {profile : {profile}} = useSelector(state => state)
  const {profile : {profile : {role}}} = useSelector(state => state)
  const { cart : cartMain } = useSelector(state => state)
  const [popup, setPopup] = useState('')
  const link = role == 'customer' ? '/users/profile' : '/seller/profile'
  useEffect(()=>{
    setPopup(cartMain.data?.length)
  }, [cartMain])
  const navigate =  useNavigate()
  if (type === 'login'){
    return (
      <div className={style.navbar}>
         
         <img style={{
          display : (role !== 'customer' ? 'none' : 'block')
         }} src={cart} onClick={() => navigate('/mybag')} alt='Cart'/>
         {popup ? <div style={{
          display : (role !== 'customer' ? 'none' : 'block')
         }} className={style.popup}>{popup}</div> : ''}
         <img src={bell} alt='Notification'/>
         <img src={message} alt='Chat'/>
         <img src={profile?.photo || noprofile} className={style.imgProfile} alt='Profile' onClick={() => navigate(link)} />
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