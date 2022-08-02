import style from './style.module.css'
import Logo from '../../component/modul/Logo'
import Button from '../../component/base/Button'
import { useNavigate, useParams } from 'react-router-dom'


const Check = () => {
  const navigate = useNavigate()
  return (
   <div className={style.body}>
    <div className={style.container}>
       <Logo />
       <h2 className='mt-5 text-center'>Thank you</h2>
       <p className='text-center my-1'>Account success to be registered</p>
       <p className='text-center my-1'>Please Check your email for verification</p>
        <Button onClick={() => navigate('/auth/login')} name="Login"></Button>      
    </div>
   </div>
  )
}

export default Check