import React from 'react'
import { addToCart } from '../../../configs/redux/actions/cartAction'
import Colors from '../../base/Colors'
import Rating from '../../base/Rating'
import Counter from '../Counter'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { rupiah } from '../../../helpers/rupiah'

const ProductDetail = ({name, price, id}) => {
  const token = localStorage?.getItem('access-token')
  const dispatch =  useDispatch()
  const [count, setCount] = useState(0)

  const handleBuy = () => {
    const data = {
      token : token,
      product_id : id,
      stock : count
    }
    console.log(data)
  }
  
  return (
    <div className={style.detail}>
       <p className={style.title}>{name ? name : "No Name"}</p>
       <p className={style.brand}>Zalora Cloth</p>
       <Rating />
       <p className={style.subtitle} >Price</p>
       <p className={style.price} >{price ? rupiah(price) : 'No Price' }</p>
       <p className={style.subtitle} >Color</p>
       <Colors />
       <div className={style.counters} >
         <div className={style.countersize} >
            <p className={style.subtitle} >Size</p>
            <Counter generateValue={setCount}/>
         </div>
         <div className={style.counterjumlah} >
            <p className={style.subtitle} >Jumlah</p>
            <Counter defaultValue={1} generateValue={setCount}/>
         </div>
       </div>
       <button className={style.white} >Chat</button>
       <button className={style.white} onClick={() => dispatch(addToCart(token, count || 1, id))}>Add bag</button>
       <button className={style.orange} onClick={handleBuy}>Buy Now</button>
    </div>
  )
}

export default ProductDetail