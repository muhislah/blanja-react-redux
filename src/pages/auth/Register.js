import style from './style.module.css'
import Logo from '../../component/modul/Logo'
import Input from '../../component/base/Input'
import { Link } from 'react-router-dom'
import Button from '../../component/base/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Register = () => {
   const dispatch = useDispatch()
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   let status = 'customer'
   const handleButton = (e) => {
      status = e
      console.log(status)
      return status
   }
   const handleRegister = () => {
      dispatch({
         type: 'USER_REGISTER',
         payload : {
            name : name,
            email : email,
            password : password 
         }
      })
   }
  return (
    <div className={style.container}>
       <Logo />
       <p>Please Register with your account</p>
       <div className={style.selector}>
          <button id='customer' className={style.customer} onClick={(e) => handleButton(e.target.id)}>Customer</button>
          <button id='seller' className={style.seller} onClick={(e) => handleButton(e.target.id)}>Seller</button>
       </div>
       <Input ph="Name" onChange={(e) => setName(e.target.value)} />
       <Input ph="Email" onChange={(e) => setEmail(e.target.value)} />
       <Input ph="Password" onChange={(e) => setPassword(e.target.value)} />
       <Link to='/forgotpassword' />
       <Button name='PRIMARY' onClick={handleRegister}/>
    </div>
  )
}

export default Register