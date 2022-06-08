import axios from "axios";


export const handleSearch = (search) => async(dispatch) =>{
   try {
      const result = await axios.get('http://127.0.0.1:5000/products?search='+search)
      const data = result.data.data
      console.log(data)
      dispatch({type: 'SEARCH_DATA', payload: { data : data , key: search }})
   } catch (error) {
      console.log(error)
   }
}