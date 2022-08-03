import React, { useEffect } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Header from '../../component/modul/Header'
import ImageDetail from '../../component/modul/ImageDetail'
import ProductDetail from '../../component/modul/ProductDetail'
import { useState } from 'react'


const Products = () => {
   const {detail : {data} } = useSelector((state) => state)
   const [detail, setDetail] = useState({})
   const dumpPhoto = []
   const arrayLine = detail?.description?.split('\n')
   useEffect(() => {
      setDetail(data)
   },[])
  return (
    <div>
       <Header />
       <div className={style.container+ " mb-5"}>
         <p className={style.category}>Home  &gt;  category  &gt; {detail.category_name}</p>
         <div className={style.hero} >
            {detail ? (
               <>
                  <ImageDetail photo={detail?.photo || dumpPhoto}/>
                  <ProductDetail name={detail.name} price={detail.price} id={detail.id}/>
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
               { arrayLine ?
                  arrayLine.map(data => {
                     return <p>{data}</p>
                  }) : "No Description"
               }
            </div>
         </div>
       </div>
    </div>
  )
}

export default Products