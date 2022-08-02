import axios from "axios"
import Swal from 'sweetalert2'
export const getCart = (token) => async (dispatch) => {
   try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/cart',{
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      const data = result.data.data
      console.log(data)
      dispatch({type : 'GET_CART', payload : data})
   } catch (error) {
      console.log(error)
   }
}

export const addToCart = (token, stock, product_id) => async (dispatch) =>{
   if (!token) {
      return Swal.fire(
         'Caution!',
         'Plese Login First!',
         'warning'
       )
   }
   try {
      const data = {
         stock : stock,
         product_id : product_id
      }
      const result = await axios.post(process.env.REACT_APP_BACKEND_API+'/cart',data, {
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      console.log(data)
      dispatch({type : 'ADD_TO_CART'})
      dispatch(getCart(token))
   } catch (error) {
      console.log(error)
   }
}

export const deleteCart = (id, token) => async (dispatch) =>{
   if (!token) {
      return Swal.fire(
         'Caution!',
         'Plese Login First!',
         'warning'
       )
   }
   try {
      const result = await axios.delete(process.env.REACT_APP_BACKEND_API+'/cart/'+id, {
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      if(result.data.message == "DELETE CART SUCCESS"){
         dispatch(getCart(token))
      }
   } catch (error) {
      console.log(error)
   }
}