import React from 'react'
import style from './style.module.css'

const Input = ({name, ph , onChange }) => {
  return (
    <input name={name} id={name} placeholder={ph} className={style.input} onChange={onChange}/>
  )
}

export default Input