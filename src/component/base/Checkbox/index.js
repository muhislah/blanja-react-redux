import React from 'react'
import style from './style.module.css'
import check from './check.svg'

const Checkbox = () => {
   const styleUser = {
      backgroundImage : `url(${check})`,
      backgroundPosition : 'center',
      backgroundRepeat : 'no-repeat'
   }
  return (
   <input type='checkbox' className={style.checkbox} style={styleUser}/>
  )
}

export default Checkbox