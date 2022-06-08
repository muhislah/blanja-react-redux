import React from 'react'
import style from './style.module.css'

const Headline = ({head, tagline}) => {
  return (
    <div>
       <p className={style.head}>{head}</p>
       {tagline ? <p className={style.tagline}>{tagline}</p> : ''}
       
    </div>
  )
}

export default Headline
