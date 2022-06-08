import React, { useState } from 'react'
import Logo from '../Logo'
import Navbar from '../Navbar'
import style from './style.module.css'
import imgsearch from './search.svg'
import imgfilter from './filter.svg'
import { useDispatch, useSelector } from 'react-redux'
import { handleSearch } from '../../../configs/redux/actions/handleSearch'
import { useNavigate } from 'react-router-dom'



const Header = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const {login} = useSelector((state) => state)
   const [search, setSearch] = useState('')

   const handleSubmit = (e) => {
      navigate('/search')
      e.preventDefault()
      dispatch(handleSearch(search))
      setSearch('')
      
   }
   
  return (
     <div className={style.fullHead}>
      <div className={style.header}>
         <Logo />
         <div className={style.search}>
            <form onSubmit={handleSubmit} >
               <input name='search' id='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
               <img src={imgsearch} className={style.imgsearch} alt="search" onClick={handleSubmit} />
               <div className={style.filter} >
                  <img src={imgfilter} className={style.imgfilter} alt="filter" />
               </div>
            </form>
         </div>
         <Navbar type={login.isLogin ? 'login' : 'guest'}/>
      </div>
     </div>
  )
}

export default Header