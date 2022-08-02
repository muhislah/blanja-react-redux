import React from 'react'
import style from './style.module.css'
import example from './example.jpg'
import { rupiah } from '../../../helpers/rupiah'

const CheckoutItem = ({id, name, price, img}) => {
  return (
    <div className={style.item} id={id}>
      <img src={img ? img[0] : example} alt="images"/>
      <div className={style.title}>
         <p className={style.mainTitle}>{name}</p>
         <p>Zalora Cloth</p>
      </div>
      <p className={style.price}>{rupiah(price)}</p>
    </div>
  )
}

export default CheckoutItem