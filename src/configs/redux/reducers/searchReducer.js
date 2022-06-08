const initialState = {
  data : [],
  key : ''
}

const searchReducer = (state = initialState, action) => {
   if (action.type === 'SEARCH_DATA'){
      return {
         ...state,
         data : action.payload.data,
         key : action.payload.key
      }
   }else {
      return state
   }
}

export default searchReducer
