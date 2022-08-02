import axios from "axios";

export const fetchDataWithSort = async ({sort, sortby, page = 1}, setProducts) => {
  try {
    const result = await axios.get(process.env.REACT_APP_BACKEND_API + `/products?sort=${sort ? 'asc' : 'desc'}&sortby=${sortby}&page=${page}`)
    setProducts(result.data.data)
  } catch (error) {
    console.log(error)
  }
}