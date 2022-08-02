import React, { useState } from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const ShippingAddress = ({currentAddress}) => {
   const { address: { address } } = useSelector(state => state)
   const [modal, setModal] = useState('none')
   const handleModal = () => {
      setModal('block')
   }
   const closeModal = () => {
      setModal('none')
   }
   useEffect(() => {
      currentAddress(address[0])
   }, [])
   return (
      <div className={style.shipping}>
         <div className={style.modal} style={{ display: modal }}>
            <div className={style.overlay}>
               <div className={style.boxmodal}>
                  <button className={style.close} onClick={closeModal}>x</button>
                  <h2>Choose Another Address</h2>
                  <div className={style.addnew} onClick={() => console.log('add address')}>Add New Address</div>
                  <div className={style.current}>
                     {
                        address.length > 0 ? (
                           address.map(data => {
                              return (
                                 <div className={style.box} key={data.id}>
                                    <p className={style.name}>{data.name} , {data.type}</p>
                                    <p className={style.address}>{data.address}, {data.city}. {data.postalcode}</p>
                                 </div>
                              )
                           })
                        ) : ""
                  }
                  </div>
               </div>
            </div>
         </div>
         <p>Shipping address</p>
         <div className={style.box} >
            <p className={style.name}>{address[0].name}</p>
            <p className={style.address}>{address[0].address}, {address[0].city}, {address[0].postalcode}</p>
            <button onClick={handleModal}>Choose another address</button>
         </div>
      </div>
   )
}

export default ShippingAddress