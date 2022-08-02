import axios from "axios"
import Swal from 'sweetalert2'

export const registerAction = (user, navigate) => async (dispatch) => {
  try {
    const result = await axios.post(process.env.REACT_APP_BACKEND_API+'/auth/register', user)
    if (result.data.message == "EMAIL HAS BEEN REGISTERED"){
      Swal.fire(
        'Caution!',
        'Email has been registered',
        'warning'
      )
      return navigate('/login')
    }
    Swal.fire(
      'Success',
      'Register success, Please Check your email',
      'success'
    )
    return navigate('/check')
  } catch (error) {
    console.log(error)
  }
}