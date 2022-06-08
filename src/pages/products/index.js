import React, { useEffect } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../component/modul/Header'
import ImageDetail from '../../component/modul/ImageDetail'
import ProductDetail from '../../component/modul/ProductDetail'
import { detailAction } from '../../configs/redux/actions/detailAction'


const Products = () => {
   const {detail} = useSelector((state) => state)
   const dispatch = useDispatch()
   const {id} = useParams()
   useEffect(() => {
      dispatch(detailAction(id))
   }, [])
  return (
    <div>
       <Header />
       <div className={style.container}>
         <p className={style.category}>Home  &gt;  category  &gt; {detail.data.category_name}</p>
         <div className={style.hero} >
            <ImageDetail />
            <ProductDetail name={detail.data.name} price={detail.data.price} id={detail.data.id}/>
         </div>
       </div>
    </div>
  )
}

export default Products