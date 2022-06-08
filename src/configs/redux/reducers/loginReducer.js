const initialState = {
   isLogin : false,
   isLoading : false,
}

const loginReducer = (state = initialState, action) => {
   if (action.type === 'LOGIN_PENDING'){
      return {
         ...state,
         isLogin: false,
         isLoading: true
      }
   }else if (action.type === 'LOGIN_FAILED'){
      return {
         ...state,
         isLogin: false,
         isLoading: true
      }
   }
   else if(action.type === 'LOGIN_SUCCESS'){
      return {
         ...state,
         isLogin: true,
         isLoading: false
      }
   }else {
      return state
   }
}

export default loginReducer