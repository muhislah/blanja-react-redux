import style from './style.module.css'
import Logo from '../../component/modul/Logo'
import Button from '../../component/base/Button'
import { useNavigate } from 'react-router-dom'


const Verify = () => {
  const navigate = useNavigate()
  return (
   <div className={style.body}>
    <div className={style.container}>
       <Logo />
       <h2 className='mt-5 text-center'>Thank you, Your account has been Activated</h2>
        <Button onClick={() => navigate('/auth/login')} name="Login"></Button>      
    </div>
   </div>
  )
}

export default Verify