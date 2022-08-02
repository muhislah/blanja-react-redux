import axios from "axios"
import Swal from "sweetalert2"

export const handleForm = (name, price, stock, description, photo, category = 1, cb) => async(dispatch) => {
      try {
        console.log(name, price, stock, description, photo, category)

        const data = new FormData()
        data.append('name', name)
        data.append('price',price)
        data.append('stock', stock)
        data.append('description', description)
        Array.from(photo.photo).map(file => data.append('photo', file))
        data.append('category_id',category)
        
        const result = await axios({
          method : 'post',
          url : process.env.REACT_APP_BACKEND_API+'/products',
          data: data,
          headers: { "Content-Type": "multipart/form-data" }
        })
        
        dispatch({type : 'INSERT_DATA', payload : data})
        console.log(result)
        Swal.fire('Success', 'Upload products success', 'success')
        cb()
        
      } catch (error) {
        alert('Upload Gagal')
        console.log(error)     
      }
   return console.log('upload selesai')
 }