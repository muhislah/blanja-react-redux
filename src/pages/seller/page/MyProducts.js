import axios from 'axios'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mixin } from '../../../helpers/myAlert'
import { rupiah } from '../../../helpers/rupiah'
import style from '../style.module.css'
import arrow from './arrow.svg'
import { fetchDataWithSort } from './functions'

const MyProducts = () => {
   const navigate = useNavigate()
   const [products, setProducts] = useState()
   const [del, setDel] = useState(false)
   const [sort, setSort] =  useState({
      sortby : 'updated_at',
      sort : false
   })
   const [page, setPage] = useState({
      current : 1
   })
   const pageList = Array.from({length: page.total}, (_, i) => i + 1)
   const fetchData = async () => {
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API + '/products')
         setProducts(result.data.data)
         setPage({
            current : result.data.pagination.page,
            total : result.data.pagination.totalPage
         })
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      fetchData()
      setDel(false)
   }, [del])

   useEffect(() => {
      fetchDataWithSort({...sort, page : page.current}, setProducts)
   },[sort, page])

   const handleSort = (e) => {
      setSort(current => {
         return {
            ...current,
            sort : false
         }
      })
      if(e.target.id == 'name'){
         setSort({
            sortby : 'name',
            sort : !sort.sort
         })
      }else if(e.target.id == 'price'){
         setSort({
            sortby : 'price',
            sort : !sort.sort
         })
      }else if(e.target.id == 'stock'){
         setSort({
            sortby : 'stock',
            sort : !sort.sort
         })
      }else {
         setSort({
            ...sort
         })
      }
   }


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
               <td className='col-3'>{name}</td>
               <td className='col-2'>{rupiah(price)}</td>
               <td className='col-2'>{stock}</td>
               <td className='col-3'>
                  <button className='btn w-25 text-white btn-warning border-white' onClick={() => navigate('/seller/editproduct/' + id)} >Edit</button>
                  <button className='btn w-50 text-white btn-danger border-white' onClick={() => handleDelete(id)}>Delete</button>
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
                     <th className='col-1'>No <img id="index" onClick={(e) => handleSort(e)} src={arrow} className={style.arrow} alt="" /></th>
                     <th className='col-3'>Product  <img src={arrow} id="name" onClick={(e) => handleSort(e)} className={style.arrow} alt="" /></th>
                     <th className='col-2'>Price <img id="price" onClick={(e) => handleSort(e)} src={arrow} className={style.arrow} alt="" /></th>
                     <th className='col-2'>Stock <img src={arrow} id="stock" onClick={(e) => handleSort(e)} className={style.arrow} alt="" /></th>
                     <th className='col-3'>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     (products?.length > 0) ? products.map((data, index) => <List index={index + 1} name={data.name} price={data.price} stock={data.stock} id={data.id} />) : <h1 style={{ margin: 'auto' }}>Product Not Found</h1>
                  }
               </tbody>
            </table>
            <div className={style.pagination}>
               {
                  pageList.map((data) => {
                     return (
                        <button className={data == page.current ? style.pageButtonActive : style.pageButton} onClick={() => setPage({
                           ...page,
                           current : data
                        })}>{data}</button>
                     )
                  })
               }
            </div>
         </div>
      </Fragment>
   )
}

export default MyProducts