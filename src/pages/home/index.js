import React, { useEffect, useState } from 'react'
import Card from '../../component/modul/Card'
import CategoryCard from '../../component/modul/CategoryCard'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import style from './style.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const fetchData = async () => {
    try {
      const result = await axios.get('http://127.0.0.1:5000/products')
      const categories = await axios.get('http://127.0.0.1:5000/categories')
      setProducts(result.data.data)
      setCategories(categories.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Header />
      <div className={style.container}>
        <p>Carousel</p>
        <Headline head="Category" tagline="What are you currently looking for" />

        <div className={style.categories} id='categories'>
          <button className={style.left}>&#60;</button>
          <div className={style.container} >
            {
              categories.map((data, index) => <CategoryCard x={index} name={data.name} id={data.id} onClick={() => navigate(`/categories/${data.id}`)}/>)
            }
          </div>
          <button className={style.right}>&#62;</button>
        </div>
        
        <Headline head="Product" tagline="You’ve never seen it before!" />
        <div className={style.products} id='products'>
          {
            products.map((product) => <Card name={product.name} price={product.price} id={product.id} />)
          }
        </div>
      </div>
    </>
  )
}

export default Home