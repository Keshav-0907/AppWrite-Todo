import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { account } from '../appwrite/AppWriteConfig'
import { Link, useNavigate } from 'react-router-dom'
import Todo from './Todo'
import Todoform from './Todoform'

const Profile = () => {

  const naviagte = useNavigate()
  const[userdetails, setuserdetails]=useState()

  useEffect(()=>{
    const getData = account.get()
    getData.then(
      function(response){
        setuserdetails(response)
      },
      function(error){
        console.log(error)
      }
    )
  },[])

  const logoutuser= async() => {
    try {
      await account.deleteSession("current")
      naviagte("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    {userdetails ? (
      <>
      <div className='profile-main'>
        <div className='profile-navbar'>

          <div className='user-info'>
            <h3> Hello <span className='highlight'> {userdetails.name} </span> </h3>
          </div>

          <div className='navbar-head'> 
          <h1> To-Do List </h1>
          </div>

          <div className='profile-btn'>
            <button onClick={logoutuser} className='logout-btn'> Log Out </button>
          </div>

        </div>
        
        <Todoform/>  

        <Todo/>



      </div>
      </>
    ) : (
      <>
      <h2> User not logged in </h2>
      
      <button className='logout-btn'> <Link to='/'>Go to Login Page</Link> </button>
      </>
    )}
    </>
  )

  }

export default Profile