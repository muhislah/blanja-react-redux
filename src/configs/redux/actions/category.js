import axios from "axios";

export const categoryAction = (id) => async(dispatch) =>{
   if (!id ) {
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/categories')
         const data = result.data.data
         dispatch({type: 'GET_CATEGORY', payload: data})
      } catch (error) {
         console.log(error)
      }
   }else {
      try {
         const result = await axios.get(process.env.REACT_APP_BACKEND_API+'/categories/'+id)
         const data = result.data.data
         dispatch({type: 'GET_DETAIL_CATEGORY', payload: data})
      } catch (error) {
         console.log(error)
      }
   }
   
}