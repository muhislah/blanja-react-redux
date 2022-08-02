import React from 'react'
import style from './style.module.css'
import example from './example.jpg'
import Counter from '../Counter'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { rupiah } from '../../../helpers/rupiah'

const BagItem = ({id, name, price, defaultValue, img, addSelected }) => {
   const dispatch = useDispatch()
   const token = localStorage?.getItem('access-token')
   const [count, setCount] = useState(defaultValue)
   const [totalPriceItem, setTotalPriceItem] = useState(defaultValue * +price)
   useEffect(() => {
      setTotalPriceItem(+price * count)
   },[count])
   useEffect(() => {
      console.log(totalPriceItem)
   }, [totalPriceItem])
  return (
    <div className={style.item}>
       <input type="checkbox" />
       <div className={style.detail}>
          <img src={img ? img : example} alt="images"/>
          <div className={style.title}>
             <p className={style.mainTitle}>{name}</p>
             <p>Zalora Cloth</p>
          </div>
       </div>
       <Counter defaultValue={defaultValue} generateValue={setCount}/>
       <p className={style.price}>{rupiah(totalPriceItem)}</p>
    </div>
  )
}

export default BagItem