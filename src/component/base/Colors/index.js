import React from 'react'
import style from './style.module.css'

const Colors = () => {
   const colors = ['#1A1A1A','#D84242','#4290D8','#42D86C']
  return (
    <div className={style.color}>
       {colors.map((data) => <div style={{backgroundColor: data}}></div>)}
    </div>
  )
}

export default Colors