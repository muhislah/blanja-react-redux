import React from 'react'
import style from './style.module.css'

const Input = ({ ph , className , ...props }) => {
  return (
    <input {...props} placeholder={ph} className={style.input + " " + className}/>
  )
}

export default Input