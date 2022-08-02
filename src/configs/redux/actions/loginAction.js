import axios from "axios";
import Swal from "sweetalert2";
import { getAddress } from "./addressAction";
import { getCart } from "./cartAction";
import { categoryAction } from "./category";
import { getCheckout } from "./checkoutAction";

export const handleLogin = (email, password, navigate) => async(dispatch) =>{
   try {
      dispatch({type: 'LOGIN_PENDING'})
      const result = await axios.post(process.env.REACT_APP_BACKEND_API+'/auth/login', {
         email : email,
         password : password
      })
      const user = result.data.data
      if ( result.data.message === "EMAIL OR PASSWORD WRONG"){
         return Swal.fire('Error', 'Email or password wrong','error')
      }
      if (!user.accessToken) {
            return dispatch({type: 'LOGIN_FAILED'})
      }
      localStorage.setItem('access-token', user.accessToken)
      localStorage.setItem('refresh-token', user.refreshToken)
      dispatch(getProfile(user.accessToken))
      dispatch(getCart(user.accessToken))
      dispatch(getCheckout(user.accessToken))
      dispatch(getAddress(user.accessToken))
      dispatch(categoryAction())
      Swal.fire('Succes', 'Login success','success')
      dispatch({type: 'LOGIN_SUCCESS', payload : user})
      navigate('/')
   } catch (error) {
      console.log(error)
   }
}

export const getProfile = (token) => async(dispatch) =>{
   try {
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/auth/profile',{
         headers : {
            Authorization : `Bearer ${token}`
         }
      })
      const data = result.data.data
      console.log(result)
      dispatch({type: 'GET_PROFILE', payload : data})
   } catch (error) {
      console.log(error)
   }
}