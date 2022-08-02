import style from './style.module.css'
import Logo from '../../component/modul/Logo'
import Input from '../../component/base/Input'
import { Link } from 'react-router-dom'
import Button from '../../component/base/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleLogin } from '../../configs/redux/actions/loginAction'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [status, setStatus] = useState('customer')
   const handleButton = (e) => {
      setStatus(e.target.id)
   }
  return (
    <div className={style.body}>
      <div className={style.container}>
         <Logo />
         <p>Please login with your account</p>
         <div className={style.selector}>
            <button value="customer" id='customer' className={(status === 'customer') ? style.active : ""} onClick={(e) => handleButton(e)}>Customer</button>
            <button value="seller" id='seller' className={(status === 'seller') ? style.active : ""} onClick={(e) => handleButton(e)}>Seller</button>
         </div>
         <Input ph="Email" onChange={(e) => setEmail(e.target.value)} />
         <Input ph="Password" onChange={(e) => setPassword(e.target.value)} />
         <Link to='/forgotpassword'>Forgot password</Link>
         <Button name='Login' onClick={() => dispatch(handleLogin(email, password, navigate))}/>
         <p>Don't have an account ? <Link to="/auth/register">Register here</Link></p>
      </div>
    </div>
  )
}

export default Login