import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './style.module.css'

const Counter = ({generateValue, defaultValue}) => {
  const [value, setValue] = useState(defaultValue)
  useEffect(() => {
    generateValue(value)
  },[value])
  return (
    <div className={style.counter}>
       <div className={style.decrement} onClick={() => setValue(current => current-1)}>-</div>
       <div className={style.value}>{value}</div>
       <div className={style.increment} onClick={() => setValue(current => current+1)}>+</div>
    </div>
  )
}

export default Counter