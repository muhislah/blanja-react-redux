import React from 'react'
import style from './style.module.css'

import accesories from './img/accesories.png'
import bag from './img/bag.png'
import dress from './img/dress.png'
import formal from './img/formal.png'
import glasses from './img/glasses.png'
import hat from './img/hat.png'
import heel from './img/heel.png'
import jacket from './img/jacket.png'
import pants from './img/pants.png'
import shock from './img/shock.png'
import short from './img/short.png'
import shoes from './img/shoes.png'
import tie from './img/tie.png'
import tshirt from './img/tshirt.png'
import watch from './img/watch.png'
import womanbag from './img/womanbag.png'


const CategoryCard = ({x, name, onClick, id}) => {
   const images = [tshirt, short,jacket,pants,shoes,heel,watch,womanbag,bag, shock,glasses,hat,tie,dress,formal,accesories]
   const colors = ['#CC0B04','#1C3391','#F67B02','#E31F51','#57CD9E','#5650D8','#B5D850']
  return (
    <div className={style.card} style={{backgroundColor : colors[x]}} id={id} onClick={onClick}>
       <img alt="category" src={images[x]}/>
       <p>{name}</p>
    </div>
  )
}

export default CategoryCard