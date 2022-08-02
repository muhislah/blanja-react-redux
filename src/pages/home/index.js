import React, { useEffect, useState } from 'react'
import Card from '../../component/modul/Card'
import CategoryCard from '../../component/modul/CategoryCard'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import style from './style.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Carousel from '../../component/modul/Carousel'
import { useDispatch } from 'react-redux'
import { categoryAction } from '../../configs/redux/actions/category'


const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const fetchData = async () => {
    try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API + '/products')
      const categories = await axios.get(process.env.REACT_APP_BACKEND_API + '/categories')
      setProducts(result.data.data)
      setCategories(categories.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
    dispatch(categoryAction())
  }, [])
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className="position-relative pt-5">
          <Carousel />
        </div>
        <Headline head="Category" tagline="What are you currently looking for" />

        <div className={style.categories} id='categories'>
          {
            categories.length > 0 ? (
              <>
                <button className={style.left}>&#60;</button>
                <div className={style.container} >
                  {
                    categories.map((data, index) => <CategoryCard key={data.id} x={index} name={data.name} id={data.id} onClick={() => navigate(`/categories/${data.id}`)} />)
                  }
                </div>
                <button className={style.right}>&#62;</button>
              </>
            ) : <h1 className={style.loading}>Loading</h1>
          }
        </div>

        <Headline head="Product" tagline="You’ve never seen it before!" />
        <div className={style.products+ " d-flex justify-content-between"} id='products'>
          {
            products.map((product) => <Card name={product.name} price={product.price} id={product.id} img={product.photo ? product.photo[0] : null} />)
          }
        </div>
      </div>
    </>
  )
}

export default Home