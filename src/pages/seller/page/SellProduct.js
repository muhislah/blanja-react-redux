import React, { useEffect, useState } from 'react'
import style from '../style.module.css'
import preview from './preview.svg'
import desc from './desc.png'
import { useDispatch, useSelector } from 'react-redux'
import { handleForm } from '../../../configs/redux/actions/handleForm'
import { useNavigate } from 'react-router-dom'

const SellProduct = () => {
  const navigate = useNavigate()
  const { category : listCategory } = useSelector(state => state)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const [photo, setPhoto] = useState({})
  const [description, setDescription] = useState(1)
  const [category, setCategory] = useState()

  const handleImage = (e) => {
    console.log(e.target.files)
    const preview = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    console.log(preview)
    setPhoto({
      photo : e.target.files,
      preview : preview
    })
  }
  const handleSubmit = () => {
    dispatch(handleForm(name, price, stock, description, photo, category, () => navigate('/seller/myproduct')))
  }

  return (
    <div className={style.formInput}>
      <div className={style.tinyForm}>
        <h3>Inventory</h3>
        <hr />
        <p>Name of goods</p>
        <input type='text' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={style.tinyForm}>
        <h3>Item Detail</h3>
        <hr />
        <p>Unit price</p>
        <input type='text' onChange={(e) => setPrice(e.target.value)} />
        <p>Stock</p>
        <input type='text' onChange={(e) => setStock(e.target.value)}/>
        <p>Stock</p>
        <input type='radio' className='mx-2' name='stock'/><span className='ml-2'>Baru</span>  
        <input type='radio' className='mx-2' name='stock'/><span className='ml-2'>Bekas</span>
      </div>
      <div className={style.tinyForm}>
        <h3>Category</h3>
        <hr />
        <select onChange={(e) => setCategory(e.target.value) }>
          {
            listCategory.data ? listCategory.data.map((data) => {
              return <option value={data.id}>{data.name}</option>
            }) : <option value='0'>No Category</option>
          }
        </select>
      </div>
      <div className={style.tinyForm}>
        <h3>Photo of goods</h3>
        <hr />
        <div className={style.preview}>
          { photo.preview ? photo.preview.map((e) => <img src={e} alt="preview"/>) : <><img src={preview} alt="preview"/><img src={preview} alt="preview"/><img src={preview} alt="preview"/><img src={preview} alt="preview"/><img src={preview} alt="preview"/></>}
        </div>
        <hr />
        <input type='file' multiple accept='image/jpeg, image/png' onChange={handleImage}/>
      </div>
      <div className={style.tinyForm}>
        <h3>Description</h3>
        <hr />
        <div className={style.textarea}>
          <img src={desc} alt='describe'/>
          <textarea onChange={(e) => setDescription(e.target.value)}/>
        </div>
        
      </div>
      <button onClick={handleSubmit}>Jual</button>
    </div>
  )
}

export default SellProduct