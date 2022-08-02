import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../style.module.css'

const MyProducts = () => {
   const navigate = useNavigate()
   const [products, setProducts] = useState()
   const [del,setDel] = useState(false)

   const fetchData = async () => {
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/products')
         setProducts(result.data.data)
         
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      fetchData()
      setDel(false)
   },[del])

   const handleDelete = async (id) => {
      try {
         const result = await axios.delete(process.env.REACT_APP_BACKEND_API+'/products/'+id)
         console.log(result.data)
         alert('delete berhasil on id '+id)
         setDel(true)
      } catch (error) {
         console.log(error)
      }
   }
   const List = ({index, name, price, stock, id}) => {
      return (
         <>
            <div className='row'>
               <div className='col-1'>{index}</div>
               <div className='col-4'>{name}</div>
               <div className='col-2'>{price}<img /></div>
               <div className='col-2'>{stock}<img /></div>
               <div className='row col-3'>
                  <button className='col-6' onClick={() => navigate('/seller/editproduct/'+id)} >Edit</button>
                  <button className='col-6'  onClick={() => handleDelete(id)}>Delete</button>
               </div>
            </div>
            <hr />
         </>
      )
   }

  return (
   <Fragment>
   <div className={style.tinyForm}>
   <h3>My Products</h3>
   <hr />
   <div className='row'>
      <div className='col-1'>No</div>
      <div className='col-4'>Product</div>
      <div className='col-2'>Price</div>
      <div className='col-2'>Stock</div>
      <div className='row col-3'>Action</div>
   </div>
   <hr />
      {
         (products) ? products.map((data, index) =>  <List index={index+1} name={data.name} price={data.price} stock={data.stock} id={data.id} />) : <h1 style={{margin: 'auto'}}>Product Not Found</h1> 
      } 

   
   </div>
   </Fragment>
  )
}

export default MyProducts