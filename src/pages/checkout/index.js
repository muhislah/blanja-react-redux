import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../component/modul/CheckoutItem'
import CheckoutSummary from '../../component/modul/CheckoutSummary'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import ShippingAddress from '../../component/modul/ShippingAddress'
import style from './style.module.css'


const Checkout = () => {
  const {cart} = useSelector((state) => state)
  let total = 0;
  return (
    <div>
      <Header />
      <div className={style.container} >
        <Headline head='Checkout' />
        <div className={style.bag} >
          <div className={style.items} >
            <div className={style.selected}>
              <ShippingAddress />
            </div>

            {cart.data ? cart.data.map((data) => {
              total += data.price
              return <CheckoutItem id={data.id} name={data.name} price={data.price} />
            })  : <h1>Cart Empty</h1>}
          </div>
          <div className={style.summary}>
            <CheckoutSummary total={total} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout