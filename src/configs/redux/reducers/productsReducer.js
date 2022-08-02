const initialState = {
   data : []
}

const productReducer = (state = initialState, action) => {
   if (action.type === 'INSERT_DATA'){
      return {
         ...state,
         data : [
            ...state.data,
            action.payload
         ]
      }
   }else if (action.type === 'UPDATE_DATA'){
      return {
         ...state,
         data : [
            ...state.data,
            action.payload
         ]
      }
   }
   else {
      return state
   }
}

export default productReducer