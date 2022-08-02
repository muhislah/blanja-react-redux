const initialState = {
   cart : []
}

const cartReducer = (state = initialState, action) => {
   if (action.type === 'GET_CART'){
      return {
         data : action.payload
      }
   }else if (action.type === 'ADD_TO_CART'){
      return state
   }else {
      return state
   }
}

export default cartReducer