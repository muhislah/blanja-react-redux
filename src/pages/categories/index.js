import React, { useEffect } from 'react'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import style from './style.module.css'
import { useParams } from 'react-router-dom'
import { categoryAction } from '../../configs/redux/actions/category'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../component/modul/Card'


const Categories = () => {
   const {id} = useParams()
   const dispatch = useDispatch()
   const { category } = useSelector((state) => state)
   
   useEffect(() => {
      dispatch(categoryAction(id))
   }, [])
   console.log(category)
  return (
    <>
      <Header />
      <div className={style.container}>
         <p>Home  &gt;  category  &gt; {category.data.category}</p>
         <Headline head={category.data.category} />
         <div className={style.products} >
            { category.data.products ? category.data.products.map((data) => <Card name={data.name} price={data.price}/>) : <h1>Product Not Found</h1>}
         </div>
      </div>
    </>
  )
}

export default Categories