import axios from "axios";

export const detailAction = (id) => async(dispatch) =>{
   try {
      const result = await axios.get('http://127.0.0.1:5000/products/'+id)
      const data = result.data.data
      console.log(data)
      dispatch({type: 'GET_DETAIL', payload: data})
   } catch (error) {
      console.log(error)
   }
}