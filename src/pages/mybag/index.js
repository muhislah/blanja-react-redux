import React from 'react'
import { useSelector } from 'react-redux'
import BagItem from '../../component/modul/BagItem'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import SelectItem from '../../component/modul/SelecItem'
import ShoppingSummary from '../../component/modul/ShoppingSummary'
import style from './style.module.css'


const Mybag = () => {
  const {cart} = useSelector((state) => state)
  let total = 0;
  return (
    <div>
      <Header />
      <div className={style.container} >
        <Headline head='My bag' />
        <div className={style.bag} >
          <div className={style.items} >
            <div className={style.selected}>
              <SelectItem />
            </div>

            {cart.data ? cart.data.map((data) => {
              total += data.price
              return <BagItem id={data.id} name={data.name} price={data.price} count={1} />
            })  : <h1>Cart Empty</h1>}
          </div>
          <div className={style.summary}>
            <ShoppingSummary total={total} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mybag