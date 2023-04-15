import React, { useState } from 'react'
import { account } from '../appwrite/AppWriteConfig'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

const Signup = () => {

    const naviagte = useNavigate()
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const signupUser = async (e) => {
        e.preventDefault()

        const registerUser = account.create(
            uuidv4(),
            user.email,
            user.password,
            user.name
        )

        registerUser.then(
            function (res) {
                console.log(res)
                naviagte('/profile')
            },
            function (error) {
                console.log(error)
            }

        )
    }

    return (
        <div className='auth-container'>
            <form className='auth-form'>
                <h3 className='form-head'>Sign Up</h3>

                <div className='form-input'>
                    <h2> Name </h2>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={(e) => {
                            setuser({
                                ...user,
                                name: e.target.value
                            })
                        }}
                    ></input>
                </div>

                <div className='form-input'>
                    <h2> Username </h2>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='email'
                        onChange={(e) => {
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
                        type='password'
                        name='password'
                        id='password'
                        placeholder='password'
                        onChange={(e)=>{
                            setuser({
                                ...user,
                                password: e.target.value
                            })
                        }}
                    ></input>
                </div>
                <a href='/'><p className='auth-text'> Already Registred ? Login here </p></a>
                <button className='auth-btn' type='submit' onClick={signupUser}> Sign Up </button>
            </form>
        </div>
    )
}

export default Signup