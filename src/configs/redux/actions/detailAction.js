import axios from "axios";

export const detailAction = (id) => async(dispatch) =>{
   try {
      console.log('getting detail')
      const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/products/'+id)
      const data = result.data.data
      dispatch({type: 'GET_DETAIL', payload: data})
   } catch (error) {
      console.log(error)
   }
}