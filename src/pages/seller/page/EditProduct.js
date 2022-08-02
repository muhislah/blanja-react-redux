import React, { useEffect, useState } from 'react'
import style from '../style.module.css'
import preview from './preview.svg'
import desc from './desc.png'
import { useDispatch, useSelector } from 'react-redux'
import { handleForm } from '../../../configs/redux/actions/handleForm'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const EditProduct = () => {
  const { category : listCategory } = useSelector(state => state)
  const [data, setData] = useState({})
  const [edit, setEdit] = useState({})
  const [image, setImage] = useState({})
  const id = useParams().id
  const fetchData = async () => {
    try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/products/'+id)
      setData(result.data.data)
      console.log(result.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

  },[])

  const handleChange = (e) => {
    setEdit({
      ...edit,
      [e.target.name] : e.target.value
    })
  }

  const handleImage = (e) => {
    const preview = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setImage({
      file : e.target.files,
      preview : preview
    })
  }

  const handleSubmit = async() => {
    try {
      edit.photo = image.file
      const data = new FormData()
      for ( let x in edit) {
        if(edit[x]){
          if(x == 'photo'){
            Array.from(edit[x]).map(file => data.append('photo', file))
          }else {
            data.append(x, edit[x])
          }
        }
      }
      const result = axios.put(process.env.REACT_APP_BACKEND_API+'/products/'+id, data)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className={style.formInput}>
      <div className={style.tinyForm}>
        <h3>Inventory</h3>
        <hr />
        <p>Name of goods</p>
        <input type='text' defaultValue={data.name}  name="name" onChange={(e) => handleChange(e)} />
      </div>
      <div className={style.tinyForm}>
        <h3>Item Detail</h3>
        <hr />
        <p>Unit price</p>
        <input type='text' defaultValue={data.price} name="price" onChange={(e) => handleChange(e)}  />
        <p>Stock</p>
        <input type='text' defaultValue={data.stock} name="stock" onChange={(e) => handleChange(e)} />
        <p>Stock</p>
        <input type='radio' name='stock'/> Baru   
        <input type='radio' name='stock'/> Bekas
      </div>
      <div className={style.tinyForm}>
        <h3>Category</h3>
        <hr />
        <select name="name" defaultValue={data.category} onChange={(e) => handleChange(e)}>
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
          { image.preview ? image.preview.map((e) => <img src={e} alt="preview"/>) : data.photo ? <><img src={data.photo[0]} alt="preview"/><img src={data.photo[1]} alt="preview"/><img src={data.photo[2]} alt="preview"/><img src={data.photo[3]} alt="preview"/><img src={data.photo[4]} alt="preview"/></> : ""}
        </div>
        <hr />
        <input type='file' multiple accept='image/jpeg, image/png' onChange={handleImage}/>
      </div>
      <div className={style.tinyForm}>
        <h3>Description</h3>
        <hr />
        <div className={style.textarea}>
          <img src={desc} alt='describe' />
          <textarea defaultValue={data.description} name="decription" onChange={(e) => handleChange(e)} />
        </div>
        
      </div>
      <button onClick={() => handleSubmit()}>Update</button>
    </div>
  )
}

export default EditProduct