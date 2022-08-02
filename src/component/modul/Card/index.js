import React from 'react'
import style from './style.module.css'
import example from './example.png'
import Rating from '../../base/Rating'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../configs/redux/actions/cartAction'
import { detailAction } from '../../../configs/redux/actions/detailAction'
import { rupiah } from '../../../helpers/rupiah'

const Card = ({name, price, img, id}) => {
   const token = localStorage?.getItem('access-token')
   const dispatch = useDispatch()
   const navigate = useNavigate()
  return (
    <div className={style.card+ " mb-3"}>
       <div className={style.menu} >
          <button className={style.tiny} onClick={() => dispatch(addToCart(token, 1, id))}>Add to Card</button>
          <button className={style.tiny} onClick={() => {
            dispatch(detailAction(id))
            return navigate('/products/'+id)
            }}>Detail</button>
       </div>
       <img alt="product"src={img ? img : example} className={style.productImg+ " w-100"}/>
       <div className={style.cardDetail} id={id}>
          <p className={style.title} >{name ? name : 'Product Bla Bla'}</p>
          <p className={style.price} >{rupiah(price) }</p>
          <p className={style.brand} >Zalora Cloth</p>
          <Rating />
       </div>
    </div>
  )
}

export default Card