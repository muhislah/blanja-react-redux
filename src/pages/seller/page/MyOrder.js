import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mixin } from '../../../helpers/myAlert'
import style from '../style.module.css'

const MyOrder = () => {
   const navigate = useNavigate()
   const [products, setProducts] = useState()
   const [del, setDel] = useState(false)

   const fetchData = async () => {
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API + '/checkout')
         setProducts(result.data.data)

      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      fetchData()
      setDel(false)
   }, [del])

   const handleDelete = async (id) => {
      try {
         const result = await axios.delete(process.env.REACT_APP_BACKEND_API + '/products/' + id)
         if(result.data.message == 'SUCCESS DELETE DATA'){
            mixin.fire({
               title : "success delete product",
               icon : 'success'
            })
         }
         setDel(true)
      } catch (error) {
         console.log(error)
      }
   }
   const List = ({ index, name, price, stock, id }) => {
      return (
         <>
            <tr>
               <th className='col-1'>{index}</th>
               <td className='col-4'>{name}</td>
               <td className='col-2'>{price}</td>
               <td className='col-1'>{stock}</td>
               <td className='col-4'>
                  <button className='btn w-25 text-white btn-warning border-white' onClick={() => navigate('/seller/editproduct/' + id)} >Edit</button>
                  <button className='btn w-25 text-white btn-danger border-white' onClick={() => handleDelete(id)}>Delete</button>
               </td>
            </tr>
         </>
      )
   }

   return (
      <Fragment>
         <div className={style.tinyForm}>
            <h3>My Products</h3>
            <hr />
            <table className="table">
               <thead>
                  <tr>
                     <th className='col-1'>No</th>
                     <th className='col-4'>Product</th>
                     <th className='col-2'>Price</th>
                     <th className='col-1'>Stock</th>
                     <th className='col-4'>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     (products) ? products.map((data, index) => <List index={index + 1} name={data.name} price={data.price} stock={data.stock} id={data.id} />) : <h1 style={{ margin: 'auto' }}>Product Not Found</h1>
                  }
               </tbody>
            </table>
         </div>
      </Fragment>
   )
}

export default MyProducts