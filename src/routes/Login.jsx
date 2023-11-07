import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/loginRegister.css'
import { BarNavegation } from '../components/BarNavegation'
import { useState } from 'react'
import useValidationLogin from '../hooks/useValidationLogin'
import axios from 'axios'

export const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''  
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const onChangeSubmit = (e) => {
    setValues(prev => ({...prev, [e.target.name] : [e.target.value]})) 
  }
  const onSubmitLogin = (e) => {
    e.preventDefault()
    setErrors(useValidationLogin(values))
    if(errors.email === '' && errors.password === ''){
      axios.post('http://localhost:3000/login', values)
      .then(res =>{
        console.log(res.data)
        if(res.data === 'success'){
          navigate('/gallery')
        }else{
          alert('No record exist')
        }
      })
      .catch(err => console.error(err))
      }
    }
  

  return (
    <>
    <BarNavegation/>
    <div className='formLogin'>
      <form className="login" >
          <h2>Log in</h2>
          <input className='inp' type="text"  placeholder="Email" required name='email' onChange={onChangeSubmit}/>
          { errors.email && <span className='errors'>{errors.email}</span> }
          <input className='inp' type="password" placeholder="Password" required name='password' onChange={onChangeSubmit}/>
          { errors.password && <span className='errors'>{errors.password}</span> }
          <div className='inputsData'>
            <button id="init" className="btn" onClick={onSubmitLogin}>Login</button>
            <NavLink className="here" to={'/register'} >sign up here</NavLink>
            <p className="here">¿Have you forgotten your password?</p>.
          </div>
      </form>
    </div>
    </>
  )
}
