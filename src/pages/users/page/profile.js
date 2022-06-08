import React from 'react'
import style from './style.module.css'

const Profile = () => {
  return (
    <div className={style.container}>
       <p className={style.head}>My Profile</p>
       <p>Manage your profile information</p>
       <hr />
       <div className={style.forminput}>
          <div className={style.input}>
            <label>Name</label>
            <input />
          </div>
          <div className={style.input}>
            <label>Email</label>
            <input />
          </div>
          <div className={style.input}>
            <label>Phone Number</label>
            <input />
          </div>
          <div className={style.input}>
            <label>Gender</label>
               <input type='radio' value="Laki-Laki" name='gender'/>Laki-Laki
               <input type='radio' value="Perempuan" name='gender'/>Perempuan
          </div>
         
       </div>
   </div>
  )
}

export default Profile