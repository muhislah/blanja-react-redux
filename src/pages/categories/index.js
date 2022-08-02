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
   const { category : { category , dataCategory } } = useSelector((state) => state)
   
   useEffect(() => {
      dispatch(categoryAction(id))
   }, [])
  return (
    <>
      <Header />
      <div className={style.container}>
         <p>Home  &gt;  category  &gt; {category}</p>
         <Headline head={category} />
         <div className={style.products} >
            { dataCategory?.length > 0 ? dataCategory.map((data) => <Card name={data.name} img={data.photo[0]} price={data.price}/>) : <h1>Product Not Found</h1>}
         </div>
      </div>
    </>
  )
}

export default Categories