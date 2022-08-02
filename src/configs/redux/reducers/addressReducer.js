const initialState = {
   address : []
}

const addressReducer = (state = initialState, action) => {
   if (action.type === 'GET_ADDRESS'){
      return {
         address : action.payload
      }
   }else if (action.type === 'ADD_ADDRESS'){
      return state
   }else {
      return state
   }
}

export default addressReducer