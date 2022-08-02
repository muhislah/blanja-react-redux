import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MyAddress = () => {
  const { address  : {address}} = useSelector(state => state)
  return (
    <div className={style.container}>
       <p className={style.head}>Choose another Address</p>
       <p>Manage your shipping address</p>
       <hr />
        <button className={style.buttonaddress}>Add new address</button>
        <div>
          { address.length > 0 ? (
            address.map((data) => {
              return (
                <div key={data.id} className={style.address}>
                  <span>{data.name} - {data.type}</span>
                  <p>{data.address}, {data.phone}, {data.city}, {data.postalcode}</p>
                  <span onClick={() => console.log(data.id)}>Change address</span>
                </div>
              )
            })
          ) : ""}
        </div>
   </div>
  )
}

export default MyAddress