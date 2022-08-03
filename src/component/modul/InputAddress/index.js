import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAddress } from '../../../configs/redux/actions/addressAction'
import style from './style.module.css'

const InputAddress = ({close}) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('access-token')
  const [data, setData] = useState({
    type : 'Home'
  })
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = () => {
    dispatch(addAddress(token, data))
    close()
  }
  return (
    <div className={style.overlay} >
      <div className={style.body}>
        <div className={style.close} onClick={close}>X</div>
        <h3 className='text-center'>Input Address</h3>
        <hr />
        <div className='d-flex align-items-center'>
          <label htmlFor="name">Type : </label>
          <select name="type" onChange={(e) => handleChange(e)}>
            <option value="Home">Home</option>
            <option value="Office">Office</option>
          </select>
        </div>
        <div>
          <div>
            <div className='d-flex align-items-center mb-1'>
              <label htmlFor="name">Name : </label>
              <input type="text" className='w-75 p-1' name="name" onChange={(e) => handleChange(e)}/>
            </div>
            <div className='d-flex align-items-center mb-1'>
              <label htmlFor="name">Phone : </label>
              <input type="text" className='w-75' name="phone" onChange={(e) => handleChange(e)} />
            </div>
            <div className='d-flex align-items-center mb-1'>
              <label htmlFor="name">Address : </label>
              <input type="text" className='w-75' name="address" onChange={(e) => handleChange(e)}/>
            </div>
          </div>
          <div>
            <div className='d-flex align-items-center mb-1'>
              <label htmlFor="name">Postal Code : </label>
              <input type="text" className='w-75' name="postalcode" onChange={(e) => handleChange(e)}/>
            </div>
            <div className='d-flex align-items-center mb-1'>
              <label htmlFor="name">City : </label>
              <input type="text" className='w-75'  name="city" onChange={(e) => handleChange(e)}/>
            </div>
          </div>
          <div>
            <label htmlFor=""></label>
            <button className={style.button} onClick={handleSubmit}>Add address</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputAddress