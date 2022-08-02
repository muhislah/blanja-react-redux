import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckoutItem from '../../component/modul/CheckoutItem'
import CheckoutSummary from '../../component/modul/CheckoutSummary'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import ShippingAddress from '../../component/modul/ShippingAddress'
import style from './style.module.css'
import { useDispatch } from 'react-redux'
import { handleCheckoutAction } from '../../configs/redux/actions/listCheckoutAction'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = localStorage.getItem('access-token')
  const {cart} = useSelector((state) => state)
  const [currentAddress, setCurrentAddress] = useState()
  let total = 0;
  const handleCheckout = () => {
    const checkoutData = cart.data.map((data) => {
      return {
        ...data,
        address_id : currentAddress.id
      }
    })
    dispatch(handleCheckoutAction(checkoutData, token, navigate))
  }
  return (
    <div>
      <Header />
      <div className={style.container} >
        <Headline head='Checkout' />
        <div className={style.bag} >
          <div className={style.items} >
            <div className={style.selected}>
              <ShippingAddress currentAddress={setCurrentAddress} />
            </div>
            {cart.data ? cart.data.map((data) => {
              total += (data.price*data.stock)
              return <CheckoutItem img={data.photo} id={data.id} name={data.name} price={data.price*data.stock} />
            })  : <h1>Cart Empty</h1>}
          </div>
          <div className={style.summary}>
            <CheckoutSummary total={total} toggle={cart.data?.length > 0} onClick={handleCheckout}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Checkout