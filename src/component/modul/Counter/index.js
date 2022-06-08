import React from 'react'
import style from './style.module.css'

const Counter = ({value}) => {
  return (
    <div className={style.counter}>
       <div className={style.decrement} onClick={() => console.log('decrement')}>-</div>
       <div className={style.value}>{value ? value : 0}</div>
       <div className={style.increment} onClick={() => console.log('increment')}>+</div>
    </div>
  )
}

export default Counter