import React from 'react'
import style from './style.module.css'
import star from './Star.svg'

const Rating = () => {
  return (
   <div className={style.rating} >
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' />
      <img src={star} alt='star' /> <span className={style.brand}>(10)</span>
   </div>
  )
}

export default Rating