import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite/AppWriteConfig'

const Login = () => {
  const navigate = useNavigate()
  const [user, setuser] = useState({
    email: "",
    password: ""
  })

  const loginUser = async (e) => {
    e.preventDefault()
    try {
      await account.createEmailSession(user.email, user.password)
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='auth-container'>
      <form className='auth-form'>
        <h3 className='form-head'>Log In</h3>

        <div className='form-input'>
          <h2> Username </h2>
          <input
            type='text'
            placeholder='Username'
            id='email'
            name='email'
            onChange={(e)=>{
              setuser({
                ...user,
                email: e.target.value
              })
            }}
            ></input>
        </div>

        <div className='form-input'>
          <h2> Password </h2>
          <input
            id='password'
            name='password'
            type='password'
            onChange={(e)=>{
              setuser({
                ...user,
                password:e.target.value
              })
            }}
            placeholder='password'></input>
        </div>
        <a href='/signup'><p className='auth-text'> Not Registed ? SignUp here </p></a>
        <button className='auth-btn' type='submit' onClick={loginUser}> Log IN </button>
      </form>
    </div>
  )
}

export default Login