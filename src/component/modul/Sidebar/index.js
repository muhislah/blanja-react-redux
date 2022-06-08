import React from 'react'
import style from './style.module.css'
import profile from './profile.jpg'
import pencil from './pencil.svg'
import account from './account.svg'
import shipp from './shipp.svg'
import order from './order.svg'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
   const navigate = useNavigate()
  return (
    <div className={style.sidebar}>
       <div className={style.profile}>
          <div className={style.profileImage}>
             <img src={profile} alt="profile" />
          </div>
          <div className={style.identity}>
             <p>Johanes Mikael</p>
             <button><img src={pencil} alt="edit"/>Edit Profile</button>
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
       </div>
    </div>
  )
}

export default Sidebar