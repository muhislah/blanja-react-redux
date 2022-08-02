import React from 'react'
import { rupiah } from '../../../helpers/rupiah'
import style from './style.module.css'

const CheckoutSummary = ({total,onClick, toggle}) => {
  return (
    <div className={style.summary}>
       <p>Shopping Summary</p>
       <div className={style.total} >
          <span>Total</span>
          <span>{rupiah(total)}</span>
       </div>
       <div className={style.total} >
          <span>Delivery</span>
          <span>Rp 27.000,00</span>
       </div>
       <hr />
       <div className={style.total} >
          <span className={style.all}>Total</span>
          <span className={style.priceall}>{rupiah(total+27000)}</span>
       </div>
       <button disabled={!toggle} onClick={onClick}>Buy</button>
    </div>
  )
}

export default CheckoutSummary