import React from 'react'
import Button from '../../../component/base/Button'
import stylef from './../style.module.css'
import noimage from './../noprofile.png'
import Input from '../../../component/base/Input'

const SellerProfile = () => {
  return (
    <div className={stylef.tinyForm}>
      <h2>My profile store</h2>
      <p>Manage your profile information</p>
      <hr />
      <div className='row'>
        <div className='col-7 d-flex flex-column'>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="storename"  style={{marginRight : "10px"}}>Store name : </label>
            <Input className="mx-0" style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="email" style={{marginRight : "10px"}}>Email : </label>
            <Input className="mx-0" style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="phone" style={{marginRight : "10px"}}>Phone number : </label>
            <Input className="mx-0" style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex flex-row align-items-center justify-content-end'>
            <label htmlFor="description" style={{marginRight : "10px"}}>Store description : </label>
            <Input className="mx-0" style={{width : "60%"}}/>
          </div>
          <div className='w-100 d-flex my-4 flex-row align-items-end justify-content-end'>
            <button style={{
              width : "60%",
              border : "none",
              color : 'white',
              background : "#DB3022",
              margin : "0 0 0 auto"
            }}>Save</button>
          </div>
        </div>
        <div className='col-5 d-flex flex-column align-items-center'>
          <img src={noimage} alt="" className='w-50 rounded-circle my-3' />
          <button>Edit profile</button>
        </div>
      </div>
    </div>
  )
}

export default SellerProfile