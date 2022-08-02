const initialState = {
  profile : {}
}

const profileReducer = (state = initialState, action) => {
  if (action.type === 'GET_PROFILE'){
     return {
        profile : action.payload
     }
  }else {
     return state
  }
}

export default profileReducer