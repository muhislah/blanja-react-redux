import React from 'react'
import Colors from '../../base/Colors'
import Rating from '../../base/Rating'
import Counter from '../Counter'
import style from './style.module.css'

const ProductDetail = ({name, price, id}) => {
  return (
    <div className={style.detail}>
       <p className={style.title}>{name ? name : "No Name"}</p>
       <p className={style.brand}>Zalora Cloth</p>
       <Rating />
       <p className={style.subtitle} >Price</p>
       <p className={style.price} >Rp. {price ? price : 'No Price' }</p>
       <p className={style.subtitle} >Color</p>
       <Colors />
       <div className={style.counters} >
         <div className={style.countersize} >
            <p className={style.subtitle} >Size</p>
            <Counter />
         </div>
         <div className={style.counterjumlah} >
            <p className={style.subtitle} >Jumlah</p>
            <Counter />
         </div>
       </div>
       <button className={style.white} >Chat</button>
       <button className={style.white} >Add bag</button>
       <button className={style.orange} >Buy Now</button>
    </div>
  )
}

export default ProductDetail