import React, { useState } from 'react'
import style from './style.module.css'
import noimage from './noprofile.png'
import pencil from './pencil.svg'
import storeIcon from './store.svg'
import productIcon from './product.svg'
import order from './order.svg'
import arrow from './arrow.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../../base/Button'


const SellerSidebar = () => {
   const navigate = useNavigate()
   const {profile : {profile}} = useSelector(state=> state)
   const [dropDown, setDropdown] = useState(false)
   const styleMenu = {
      arrow : {
         transform : dropDown ? 'rotate(180deg)' : 'rotate(0)'
      },
      tinymenu : {
         display : dropDown ? 'block' : 'none',
      }
   }
   const handleLogout = () => {
      localStorage.removeItem('access-token')
      localStorage.removeItem('refresh-token')
      navigate('/login')
   }
  return (
    <div className={style.sidebar}>
       <div className={style.profile}>
          <div className={style.profileImage}>
             <img src={noimage} alt="profile" />
          </div>
          <div className={style.identity}>
             <p>{profile.storename}</p>
             <span className='text-muted text-sm'>{profile.fullname}</span>
          </div>
       </div>
       <div className={style.menu}>
         <div className={style.listmenu} onClick={() => setDropdown(!dropDown)}>
            <img src={storeIcon} alt='item' />
            <p>Store</p><img src={arrow} alt='arrow' style={styleMenu.arrow}/>
         </div>
         <div id='store' className={style.tinymenu} style={styleMenu.tinymenu}>
            <p onClick={() => navigate('/seller/profile')}>Store profile</p>
         </div>
         <div className={style.listmenu} onClick={() => setDropdown(!dropDown)}>
            <img src={productIcon} alt='item' />
            <p>Product</p><img src={arrow} alt='arrow' style={styleMenu.arrow}/>
         </div>
         <div id='product' className={style.tinymenu} style={styleMenu.tinymenu}>
            <p onClick={() => navigate('/seller/myproduct')}>My Product</p>
            <p onClick={() => navigate('/seller/sellproduct')}>Selling Product</p>
         </div>
         <div className={style.listmenu} onClick={() => setDropdown(!dropDown)}>
            <img src={order} alt='item' />
            <p>Order</p><img src={arrow} alt='arrow' style={styleMenu.arrow}/>
         </div>
         <div id='order' className={style.tinymenu} style={styleMenu.tinymenu}>
            <p>My order</p>
            <p>Order cancel</p>
         </div>
       </div>
       <div className={style.menu}>
         <Button extendClass="w-100" name="Logout" onClick={handleLogout}/>
       </div>
    </div>
  )
}

export default SellerSidebar