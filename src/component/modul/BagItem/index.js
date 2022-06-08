import React from 'react'
import style from './style.module.css'
import example from './example.jpg'
import Counter from '../Counter'
import Checkbox from '../../base/Checkbox'

const BagItem = ({id, name, price, count, img }) => {
   
  return (
    <div className={style.item}>
       <Checkbox />
       <div className={style.detail}>
          <img src={img ? img : example} alt="images"/>
          <div className={style.title}>
             <p className={style.mainTitle}>{name}</p>
             <p>Zalora Cloth</p>
          </div>
       </div>
       <Counter value={count}/>
       <p className={style.price}>Rp. {price}</p>
    </div>
  )
}

export default BagItem