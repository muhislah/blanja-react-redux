import React from 'react'
import Checkbox from '../../base/Checkbox'
import style from './style.module.css'

const SelectItem = () => {
  return (
    <div className={style.select} >
       <Checkbox />
       <p>Select all items <span>(2 items selected)</span></p>
       <button className={style.button} >Delete</button>
    </div>
  )
}

export default SelectItem