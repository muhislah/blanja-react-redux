import React, { useEffect } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../component/modul/Header'
import ImageDetail from '../../component/modul/ImageDetail'
import ProductDetail from '../../component/modul/ProductDetail'


const Products = () => {
   const {detail : {data} } = useSelector((state) => state)
   const arrayLine = data?.description?.split('\n')
  return (
    <div>
       <Header />
       <div className={style.container+ " mb-5"}>
         <p className={style.category}>Home  &gt;  category  &gt; {data.category_name}</p>
         <div className={style.hero} >
            {data ? (
               <>
                  <ImageDetail photo={data.photo}/>
                  <ProductDetail name={data.name} price={data.price} id={data.id}/>
               </>
            ) : "Loading..."}
         </div>
         <div>
            <h1 className='mt-5'>Information</h1>
            <h4>Condition</h4>
            <p style={{
               color : "#DB3022"
            }}>New</p>
            <h4 className='mb-4'>Description</h4>
            <div>
               {
                  arrayLine.map(data => {
                     return <p>{data}</p>
                  })
               }
            </div>
         </div>
       </div>
    </div>
  )
}

export default Products