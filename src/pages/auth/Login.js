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
   const {state} = useSelector((state) => state)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   let status = 'customer'
   const handleButton = (e) => {
      status = e
      console.log(status)
      return status
   }
   console.log(state)
  return (
    <div className={style.container}>
       <Logo />
       <p>Please login with your account</p>
       <div className={style.selector}>
          <button id='customer' className={style.customer} onClick={(e) => handleButton(e.target.id)}>Customer</button>
          <button id='seller' className={style.seller} onClick={(e) => handleButton(e.target.id)}>Seller</button>
       </div>
       <Input ph="Email" onChange={(e) => setEmail(e.target.value)} />
       <Input ph="Password" onChange={(e) => setPassword(e.target.value)} />
       <Link to='/forgotpassword' />
       <Button name='PRIMARY' onClick={() => dispatch(handleLogin(email, password, navigate))}/>
    </div>
  )
}

export default Login