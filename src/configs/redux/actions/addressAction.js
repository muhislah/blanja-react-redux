import axios from "axios"
import Swal from 'sweetalert2'
export const getAddress = (token) => async (dispatch) => {
   try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/address',{
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      const data = result.data.data
      console.log(data)
      dispatch({type : 'GET_ADDRESS', payload : data})
   } catch (error) {
      console.log(error)
   }
}

export const addAddress = (token,data) => async (dispatch) =>{
   if (!token) {
      return Swal.fire(
         'Caution!',
         'Plese Login First!',
         'warning'
       )
   }
   try {
      const result = await axios.post(process.env.REACT_APP_BACKEND_API+'/address',data, {
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      console.log(data)
      dispatch({type : 'ADD_ADDRESS'})
      dispatch(getAddress(token))
   } catch (error) {
      console.log(error)
   }
}