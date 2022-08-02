import Swal from "sweetalert2"
import { deleteCart } from "./cartAction"
import { addToCheckout } from "./checkoutAction"

export const handleCheckoutAction = (data, token, navigate) => async (dispatch) => {
  try {
    const result = await data.map((data) => {
      dispatch(addToCheckout(token, data.stock, data.product_id, data.address_id))
      dispatch(deleteCart(data.id, token))
    })
    Promise.all(result).then((result) => {
      Swal.fire('Success', 'Checkout Complete','success')
      navigate('/users/orders')
    }).catch((error) => console.log(error))
  } catch (error) {
    console.log(error)
  }
}