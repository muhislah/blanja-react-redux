const initialState = {
   data : []
}

const categoryReducer = (state = initialState, action) => {
   if (action.type === 'GET_CATEGORY'){
      return {
         ...state,
         data : action.payload
      }
   }else {
      return state
   }
}

export default categoryReducer