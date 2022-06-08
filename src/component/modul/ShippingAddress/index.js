import React, { useState } from 'react'
import style from './style.module.css'


const ShippingAddress = () => {
   const [modal, setModal] = useState('none')
   const handleModal = () => {
      setModal('block')
   }
   const closeModal =() => {
      setModal('none')
   }
  return (
    <div className={style.shipping}>
       <div className={style.modal} style={{display: modal}}>
          <div className={style.overlay}>
             <div className={style.boxmodal}>
                <button className={style.close} onClick={closeModal}>x</button>
                <h2>Choose Another Address</h2>
                <div className={style.addnew}>Add New Address</div>
                <div className={style.current}>
                <div className={style.box} >
                     <p className={style.name}>Andreas Jane</p>
                     <p className={style.address}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                  </div>
                </div>
             </div>
          </div>
       </div>
       <p>Shipping address</p>
       <div className={style.box} >
          <p className={style.name}>Andreas Jane</p>
          <p className={style.address}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
         <button onClick={handleModal}>Choose another address</button>
       </div>
    </div>
  )
}

export default ShippingAddress