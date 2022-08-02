import React, { useState } from 'react'
import style from './style.module.css'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
import image5 from './img/image5.jpg'

const ImageDetail = ( { photo }) => {
   const [mainImage, setMainImage] = useState(null)
   const [animate, setAnimate] = useState(false)
   const selectImage = (data) => {
      setMainImage(data)
      setAnimate(true)
      setTimeout(() => {
         setAnimate(false)
      },3000)
   }
  return (
    <div className={style.images}>
       <img className={style.imageJumbo} src={mainImage ? mainImage : photo?.length > 0 ? photo[0] : image1 } style={animate? {animation: 'fade 2000ms forwards'} : {}}alt="images"/>
       <div className={style.imagesSmall}>
          {photo.map((data) => <img className={style.imageSmall} onClick={(e) => selectImage(data)} src={data} alt="images"/>)}
         
       </div>
    </div>
  )
}

export default ImageDetail