import React from 'react'
import { useNavigate } from 'react-router-dom'
import { rupiah } from '../../../helpers/rupiah'
import style from './style.module.css'

const ShoppingSummary = ({total, toggle}) => {
   const navigate = useNavigate()
  return (
    <div className={style.summary}>
       <p>Shopping Summary</p>
       <div className={style.total} >
          <span>Total</span>
          <span>{rupiah(total)}</span>
       </div>
       <button disabled={!toggle} onClick={() => navigate('/checkout')}>Buy</button>
    </div>
  )
}

export default ShoppingSummary