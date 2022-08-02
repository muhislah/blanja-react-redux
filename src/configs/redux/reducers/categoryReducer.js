const initialState = {
   data : [],
   category : "",
   dataCategory : []
}

const categoryReducer = (state = initialState, action) => {
   if (action.type === 'GET_CATEGORY'){
      return {
         ...state,
         data : action.payload
      }
   }else if (action.type === 'GET_DETAIL_CATEGORY'){
      return {
         ...state,
         category : action.payload.category,
         dataCategory : action.payload.products
      }
   }else{
      return state
   }
}

export default categoryReducer