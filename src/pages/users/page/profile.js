import React from 'react'
import style from './style.module.css'
import noimage from './../noprofile.png'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateProfile } from '../../../configs/redux/actions/profileAction'

const Profile = () => {
  const token = localStorage?.getItem('access-token')
  const dispatch = useDispatch()
  const {profile : {profile}} = useSelector(state => state)
  const [user, setUser] = useState()
  const [image, setImage] = useState()
  const handleUpdate = () => {
    dispatch(updateProfile({...user, photo : image && image.file }, token))
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    }
    )
  }
  const handleImage = (e) => {
    setImage({
      preview : URL.createObjectURL(e.target.files[0]),
      file : e.target.files[0]
    })
  }
  return (
    <div className={style.container}>
      <p className={style.head}>My Profile</p>
      <p>Manage your profile information</p>
      <hr />
      <div className={style.myform+ " row"}>
        <div className={style.forminput + " col-7"}>
          <div className={style.input}>
            <label>Name</label>
            <input defaultValue={profile?.fullname || ""} onChange={(e) => handleChange(e)} name="fullname"/>
          </div>
          <div className={style.input}>
            <label>Email</label>
            <input defaultValue={profile?.email || ""} onChange={(e) => handleChange(e)}  name="email"/>
          </div>
          <div className={style.input}>
            <label>Phone Number</label>
            <input defaultValue={profile?.phone || ""} onChange={(e) => handleChange(e)} name="phone"/>
          </div>
          <div className={style.input}>
            <label>Gender</label>
            <input type='radio' defaultChecked={true} onChange={(e) => handleChange(e)}  value="Laki-Laki" name='gender' />Laki-laki
            <input type='radio' onChange={(e) => handleChange(e)}  value="Perempuan" name='gender'/>Perempuan
          </div>
          <div className={style.input}>
            <label htmlFor="">Birth</label>
            <input type="date" name="birth" onChange={(e) => handleChange(e)} defaultValue={new Date(profile?.birth) || null}/>
          </div>
          <div className={style.input}>
            <label htmlFor=""></label>
            <button className={style.button} onClick={handleUpdate}>Save</button>
          </div>
        </div>
        <div className='col-5 d-flex flex-column align-items-center'>
          <img src={image?.preview ? image.preview : profile?.photo || noimage} alt="" className={style.image} />
          <button className={style.buttonwhite + " mt-5 position-relative"}><input type="file" onChange={(e) => handleImage(e)} accept="image/*" style={{
            position : 'absolute',
            width : '100%',
            height : "100%",
            top : 0 ,
            left: 0,
            opacity : 0,
            cursor : "pointer"
          }}/>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Profile