const initialState = {
   data : {}
}

const detailReducer = (state = initialState, action) => {
   if (action.type === 'GET_DETAIL'){
      return {
         ...state,
         data : {...action.payload[0]}
      }
   }else {
      return state
   }
}

export default detailReducer