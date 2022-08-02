import style from './style.module.css'
import Logo from '../../component/modul/Logo'
import Input from '../../component/base/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../component/base/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAction } from '../../configs/redux/actions/registerAction'

const Register = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [status, setStatus] = useState('customer')
   const [user,setUser] = useState({})
   const handleChange = (e) => {
      setUser({
         ...user,
         [e.target.name] : e.target.value
      })
   }

   const handleButton = (e) => {
      setStatus(e.target.id)
   }
   const handleRegister = () => {
      user.role = status
      dispatch(registerAction(user, navigate))
   }
  return (
   <div className={style.body}>
    <div className={style.container}>
       <Logo />
       <p>Please Register with your account</p>
       <div className={style.selector}>
          <button id='customer' className={(status === 'customer') ? style.active : ""} onClick={(e) => handleButton(e)}>Customer</button>
          <button id='seller' className={(status === 'seller') ? style.active : ""} onClick={(e) => handleButton(e)}>Seller</button>
       </div>
       <Input ph="Name" name="fullname" onChange={(e) => handleChange(e)} />
       <Input ph="Email" name="email" onChange={(e) => handleChange(e)} />
       <Input ph="Phone Number" name="phone" defaultValue={null} type={(status === "customer") ? "hidden" : "text"} onChange={(e) => handleChange(e)} />
       <Input ph="Store Name" name="storename" defaultValue={null} type={(status === "customer") ? "hidden" : "text"} onChange={(e) => handleChange(e)} />
       <Input ph="Password" type="password" name="password" onChange={(e) => handleChange(e)} />
       <Link to='/forgotpassword' />
       <Button name='Register' onClick={handleRegister}/>
       <p>Already have an account ? <Link to="/auth/login">Login</Link></p>
    </div>
   </div>
  )
}

export default Register