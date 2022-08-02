import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BagItem from '../../component/modul/BagItem'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import SelectItem from '../../component/modul/SelecItem'
import ShoppingSummary from '../../component/modul/ShoppingSummary'
import style from './style.module.css'


const Mybag = () => {
  const {cart} = useSelector((state) => state)
  const [count, setCount] =  useState()
  const [selected, setSelected] = useState()
  const [total, setTotal] = useState(0)
  let totalPrice = 0
  useEffect(() => {
    setTotal(0)
    console.log(count)
  }, [count])
  
  return (
    <div>
      <Header />
      <div className={style.container} >
        <Headline head='My bag' />
        <div className={style.bag}>
          <div className={style.items} >
            <div className={style.selected}>
              <SelectItem count={selected}/>
            </div>
            {cart.data ? 
            cart.data.map((data) => {
              totalPrice += (data.price * data.stock)
               return <BagItem id={data.id} addSelected={setSelected}  defaultValue={data.stock} img={data.photo[0]} name={data.name} price={data.price} setCount={setCount} />
            })  : <h1>Cart Empty</h1>}
          </div>
          <div className={style.summary}>
            <ShoppingSummary toggle={cart.data?.length > 0} total={totalPrice} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Mybag