export const cartAction = (id, name, price, count, img) => async (dispatch) => {
   const data = {
      id: id,
      name: name,
      price: price,
      img : img
   }
   try {
      dispatch({type : 'ADD_TO_CART', payload : data })
   } catch (error) {
      console.log(error)
   }
}