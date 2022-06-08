import React from 'react'
import style from './style.module.css'
import example from './example.png'
import Rating from '../../base/Rating'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../../configs/redux/actions/cartAction'
import { useNavigate } from 'react-router-dom'

const Card = ({name, price, img, id}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
  return (
    <div className={style.card}>
       <div className={style.menu} >
          <button className={style.tiny} onClick={() => dispatch(cartAction(id, name, price, 1, img))}>Add to Card</button>
          <button className={style.tiny} onClick={() => navigate('/products/'+id)}>Detail</button>
       </div>
       <img alt="product" src={img ? img : example} className={style.productImg}/>
       <div className={style.cardDetail} id={id}>
          <p className={style.title} >{name ? name : 'Product Bla Bla'}</p>
          <p className={style.price} >Rp {price}</p>
          <p className={style.brand} >Zalora Cloth</p>
          <Rating />
       </div>
    </div>
  )
}

export default Card