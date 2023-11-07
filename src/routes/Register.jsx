import '../styles/loginRegister.css'
import '../styles/index.css'

import { useState } from 'react'
import axios from 'axios'
import { BarNavegation } from '../components/BarNavegation'
import useValidationRegister from '../hooks/useValidationRegister'
import { NavLink, useNavigate } from 'react-router-dom'
export const Register = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    if(name == '' || age == '' || email == '' || password == ''){
      setErrors(useValidationRegister(name, age, email, password));
    }else{
      axios.post('http://localhost:3000/create',{
      username: name,
      age: age,
      email: email,
      password: password
    }).then(()=>{
      cleanForm()
      navigate('/login')
      //Haga algo cuando se registre el usuario
    })
    }
  }
  
  const cleanForm = () => {
    setName('')
    setAge('')
    setEmail('')
    setPassword('')
    setErrors('')
  }
  return (
    <>
    <BarNavegation/>
    <div className='formRegister'>
      <form className="register" >
        <h2>sign up</h2>
        <input className='inp' type="text" value={name} name="name" placeholder="Name" onChange={(e) => {
          setName(e.target.value) 
        }}/>
        { errors.name && 
        <div className='errors'>
          <p className='alert'>Error: </p>  
          <span className='errors'>{errors.name}</span>
        </div> }
        <input className='inp' type="number" value={age} name="age" placeholder="Age" onChange={(e) => {
          setAge(e.target.value)
        }}/>
        { errors.age && 
        <div className='errors'>
          <p className='alert'>Error: </p>  
          <span className='errors'>{errors.age}</span>
        </div> }
        <input className='inp' type="email" value={email} name="email" placeholder="Email" onChange={(e) => {
          setEmail(e.target.value)
        }}/>
        { errors.email && 
        <div className='errors'>
          <p className='alert'>Error: </p>  
          <span className='errors'>{errors.email}</span>
        </div> }
        <input className='inp' type="password" value={password} name="password" placeholder="Password" onChange={(e) => {
          setPassword(e.target.value)
        }}/>
        { errors.password && 
        <div className='errors'>
          <p className='alert'>Error: </p>  
          <span className='errors'>{errors.password}</span>
        </div> }
        <div className='inputsData'>
          <button id="register" className="btn" onClick={onSubmit}>sign up</button>
          <NavLink className="here" to={'/login'} >If you already have an account, enter here</NavLink>
        </div>
      </form>
    </div>
    </>
  )
}


