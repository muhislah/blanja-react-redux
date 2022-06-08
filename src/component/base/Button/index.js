import React from 'react'
import style from './style.module.css'

const Button = ({name, onClick}) => {
  return (
    <button className={style.button} onClick={onClick}>{name}</button>
  )
}

export default Button