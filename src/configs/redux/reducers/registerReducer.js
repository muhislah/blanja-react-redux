const initialState = {

   email : '',
   password : ''
}

const registerReducer = (state = initialState, action) => {
   if (action.type === 'USER_REGISTER'){
      return {
         ...state,
         name : action.payload.name,
         email : action.payload.email,
         password : action.payload.password
      }
   }else {
      return state
   }
}

export default registerReducer