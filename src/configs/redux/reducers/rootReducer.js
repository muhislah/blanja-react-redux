import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import detailReducer from './detailReducer'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    register : registerReducer,
    category : categoryReducer,
    cart : cartReducer,
    search : searchReducer,
    detail : detailReducer
})

export default rootReducer