import React from 'react'
import stylef from './../style.module.css'
import noimage from './../noprofile.png'
import Input from '../../../component/base/Input'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../../configs/redux/actions/profileAction'

const SellerProfile = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('access-token')
  const {profile : {profile}} = useSelector(state => state)
  const [user, setUser] = useState({})
  const [photo, setPhoto] = useState()
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }
  const handleImage = (e) => {
    setPhoto({
      file : e.target.files[0],
      preview : URL.createObjectURL(e.target.files[0])
    })
  }
  const handleSubmit = () => {
    user.photo = photo?.file
    dispatch(updateProfile(user, token))
  }
  return (
    <div className={stylef.tinyForm}>
      <h2>My profile store</h2>
      <p>Manage your profile information</p>
      <hr />
      <div className='row'>
        <div className='col-7 d-flex flex-column'>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="storename"  style={{marginRight : "10px"}}>Store name : </label>
            <Input className="mx-0" onChange={(e) => handleChange(e)} name="storename" defaultValue={profile.storename} style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="email" style={{marginRight : "10px"}}>Email : </label>
            <Input className="mx-0" name="email" onChange={(e) => handleChange(e)} defaultValue={profile.email} style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="phone" style={{marginRight : "10px"}}>Phone number : </label>
            <Input className="mx-0" name="phone" onChange={(e) => handleChange(e)} defaultValue={profile.phone} style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="description" style={{marginRight : "10px"}}>Store description : </label>
            <Input className="mx-0" name="storedescription" onChange={(e) => handleChange(e)} defaultValue={profile.storedescription} style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex my-4 flex-row align-items-end justify-content-end'>
            <button style={{
              width : "60%",
              border : "none",
              color : 'white',
              background : "#DB3022",
              margin : "0 0 0 auto"
            }} onClick={handleSubmit}>Save</button>

          </div>
        </div>
        <div className='col-5 d-flex flex-column align-items-center'>
          <img src={photo?.preview ? photo.preview : profile.photo || noimage} alt="" className='w-50 rounded-circle my-3' />
          <button className='position-relative'>
            <input type="file" accept="image/*" onChange={(e) => handleImage(e)} className='position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer'/>
            Edit profile</button>
        </div>
      </div>
    </div>
  )
}

export default SellerProfile