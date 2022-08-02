import { combineReducers } from 'redux'
import addressReducer from './addressReducer'
import cartReducer from './cartReducer'
import categoryReducer from './categoryReducer'
import checkoutReducer from './checkoutReducer'
import detailReducer from './detailReducer'
import loginReducer from './loginReducer'
import productReducer from './productsReducer'
import profileReducer from './profileReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    profile : profileReducer,
    address : addressReducer,
    checkout : checkoutReducer,
    login: loginReducer,
    category : categoryReducer,
    cart : cartReducer,
    search : searchReducer,
    detail : detailReducer,
    product : productReducer
})

export default rootReducer