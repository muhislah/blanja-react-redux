import React from 'react'
import Header from '../../component/modul/Header'
import Headline from '../../component/modul/Headline'
import style from './style.module.css'
import Card from '../../component/modul/Card'
import { useSelector } from 'react-redux'


const Search = () => {
   const { search } = useSelector((state) => state)

   console.log(search)
  return (
    <>
      <Header />
      <div className={style.container}>
         <p>Home  &gt;  Search  &gt; {search.key}</p>
         <Headline head={`Search key : ${search.key}`} />
         <div className={style.products} >
            { search.data.length > 0 ? search.data.map((data, index) => <Card name={data.name} price={data.price} img={data.photo[0]} id={data.id}/>) : <h1 style={{fontSize:'34px'}}>Product Not Found</h1>}
         </div>
      </div>
    </>
  )
}

export default Search