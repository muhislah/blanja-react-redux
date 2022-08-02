import React from 'react'
import style from './style.module.css'
import noprofile from './noprofile.png'
import pencil from './pencil.svg'
import account from './account.svg'
import shipp from './shipp.svg'
import order from './order.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../../base/Button'
import {useDispatch} from 'react-redux'
import { logout } from '../../../configs/redux/actions/logoutAction'

const Sidebar = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const {profile : {profile }} = useSelector(state => state)
   const handleLogout = () => {
      dispatch(logout(navigate))
   }
   return (
    <div className={style.sidebar}>
       <div className={style.profile}>
          <div className={style.profileImage}>
             <img src={profile?.photo || noprofile} alt="profile" className={style.imageprofile}/>
          </div>
          <div className={style.identity}>
             <p>{profile?.fullname || ""}</p>
          </div>
       </div>
       <div className={style.menu}>
         <div className={style.listmenu} onClick={() => navigate('/users/profile')}>
            <img src={account} alt='item' />
            <p>My Account</p>
         </div>
         <div className={style.listmenu} onClick={() => navigate('/users/shipping')}>
            <img src={shipp} alt='item' />
            <p>Shipping Address</p>
         </div>
         <div className={style.listmenu} onClick={() => navigate('/users/orders')}>
            <img src={order} alt='item' />
            <p>My Order</p>
         </div>
         <div className={style.logout}>
            <Button name="Logout" extendClass="w-100 mt-5" onClick={handleLogout} />
         </div>
       </div>
    </div>
  )
}

export default Sidebar