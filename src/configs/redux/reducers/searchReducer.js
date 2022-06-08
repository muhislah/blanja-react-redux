const initialState = {
  data : []
}

const searchReducer = (state = initialState, action) => {
   if (action.type === 'SEARCH_DATA'){
      return {
         ...state,
         data : action.payload
      }
   }else {
      return state
   }
}

export default searchReducer
