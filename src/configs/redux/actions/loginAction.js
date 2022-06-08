import axios from "axios";

export const handleLogin = (email, password, navigate) => async(dispatch) =>{
   try {
      dispatch({type: 'LOGIN_PENDING'})
      const result = await axios.post('http://127.0.0.1:5000/auth/login', {
         email : email,
         password : password
      })
      const user = result.data.data
      console.log(user)
      if (!user.accessToken) {
            return dispatch({type: 'LOGIN_FAILED'})
      }
      localStorage.setItem('access-token', user.accessToken)
      localStorage.setItem('refresh-token', user.refreshToken)
      dispatch({type: 'LOGIN_SUCCESS', payload : user})
      navigate('/')
   } catch (error) {
      console.log(error)
   }
}