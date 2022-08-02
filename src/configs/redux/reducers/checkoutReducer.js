const initialState = {
   checkout : []
}

const checkoutReducer = (state = initialState, action) => {
   if (action.type === 'GET_CHECKOUT'){
      return {
         checkout : action.payload
      }
   }else if (action.type === 'ADD_TO_CHECKOUT'){
      return state
   }else {
      return state
   }
}

export default checkoutReducer