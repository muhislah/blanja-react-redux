const initialState = {
   data : []
}

const cartReducer = (state = initialState, action) => {
   if (action.type === 'ADD_TO_CART'){
      return {
         ...state,
         data : [
            ...state.data,
            action.payload
         ]
      }
   }else {
      return state
   }
}

export default cartReducer