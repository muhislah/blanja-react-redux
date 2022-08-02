export const logout = (navigate) => (dispatch) => {
  try {
    localStorage.removeItem('access-token')
    localStorage.removeItem('refresh-token')
    dispatch({type : "LOGOUT"})
    navigate('/login')
  } catch (error) {
    console.log(error)
  }
}