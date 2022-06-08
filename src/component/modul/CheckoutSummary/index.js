import React from 'react'
import style from './style.module.css'

const CheckoutSummary = ({total}) => {
  return (
    <div className={style.summary}>
       <p>Shopping Summary</p>
       <div className={style.total} >
          <span>Total</span>
          <span>Rp. {total}</span>
       </div>
       <div className={style.total} >
          <span>Delivery</span>
          <span>Rp. 27000</span>
       </div>
       <hr />
       <div className={style.total} >
          <span className={style.all}>Total</span>
          <span className={style.priceall}>Rp. {total+27000}</span>
       </div>
       <button>Buy</button>
    </div>
  )
}

export default CheckoutSummary