import React from 'react'
import style from './style.module.css'

const Button = ({name, onClick , extendClass }) => {
  return (
    <button className={style.button + " " + extendClass} onClick={onClick}>{name}</button>
  )
}

export default Button