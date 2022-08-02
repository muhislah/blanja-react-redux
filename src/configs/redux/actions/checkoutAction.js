import axios from "axios"
import Swal from 'sweetalert2'
export const getCheckout = (token) => async (dispatch) => {
   try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/checkout',{
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      const data = result.data.data
      console.log(data)
      dispatch({type : 'GET_CHECKOUT', payload : data})
   } catch (error) {
      console.log(error)
   }
}

export const addToCheckout = (token, stock, product_id, address_id) => async (dispatch) =>{
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
         product_id : product_id,
         address_id : address_id
      }
      const result = await axios.post(process.env.REACT_APP_BACKEND_API+'/checkout',data, {
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      console.log(data)
      dispatch({type : 'ADD_TO_CHECKOUT'})
      dispatch(getCheckout(token))
   } catch (error) {
      console.log(error)
   }
}