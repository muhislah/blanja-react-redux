import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

const ShoppingSummary = ({total}) => {
   const navigate = useNavigate()
  return (
    <div className={style.summary}>
       <p>Shopping Summary</p>
       <div className={style.total} >
          <span>Total</span>
          <span>Rp. {total}</span>
       </div>
       <button onClick={() => navigate('/checkout')}>Buy</button>
    </div>
  )
}

export default ShoppingSummary