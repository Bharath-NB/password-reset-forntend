import axios from 'axios'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  const handleLogout = () => {
    axios.get('https://password-reset-backend-ra1t.onrender.com/auth/logout')
    .then(res => {
      if(res.data.status) {
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>Home
      <button><Link to="/dashboard" >Dashboard</Link></button>
      <br /> <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home