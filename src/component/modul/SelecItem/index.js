import React from 'react'
import style from './style.module.css'

const SelectItem = ({count}) => {
  return (
    <div className={style.select} >
       <input type="checkbox"/>
       <p>Select all items <span>(2 items selected)</span></p>
       <button className={style.button} >Delete</button>
    </div>
  )
}

export default SelectItem