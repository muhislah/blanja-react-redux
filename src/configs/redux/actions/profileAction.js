import axios from "axios";
import Swal from "sweetalert2";
import { getProfile } from "./loginAction";

export const updateProfile = (body, token) => async (dispatch) => {
  try {
    let data = new FormData()
    for( let x in body){
      if (body[x]){
        data.append(x, body[x])
      }
    }
    const result = await axios.put(process.env.REACT_APP_BACKEND_API+'/auth/profile', data , {
      headers : {
        Authorization : `Bearer ${token}`
      }
    } )
    console.log(result)
    if(result){
      Swal.fire('Success!','Update profile success', 'success')
    }
    dispatch(getProfile(token))
  } catch (error) {
    Swal.fire('Error!','Update profile failed', 'error')
    console.log(error)
  }
}