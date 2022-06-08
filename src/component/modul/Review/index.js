import React from 'react'
import style from './style.module.css'
import star from './Star.svg'

const Review = () => {
  return (
    <div className={style.review}>
       <div className={style.score}>
          <p className={style.high}>5.0<span>/10</span></p>
          <div className={style.stars} >
             <img src={star} alt='star' />
             <img src={star} alt='star' />
             <img src={star} alt='star' />
             <img src={star} alt='star' />
             <img src={star} alt='star' />
          </div>
       </div>
       <div className={style.starver}>
         <img src={star} alt='star' />
         <img src={star} alt='star' />
         <img src={star} alt='star' />
         <img src={star} alt='star' />
         <img src={star} alt='star' />
       </div>
       <div className={style.spec}>
         <p>5</p>
         <p>4</p>
         <p>3</p>
         <p>2</p>
         <p>1</p>
       </div>
       <div className={style.fill}>
          <hr />
       </div>
       <div className={style.spec}>
         <p>4</p>
         <p>0</p>
         <p>0</p>
         <p>0</p>
         <p>0</p>
       </div>
    </div>

  )
}

export default Review