import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export const RemoveToken = ({ children }) => {
  const token = localStorage.getItem('access-token')
  const navigate = useNavigate()
  if (token) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Your Login status will be destroyed",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed){
        localStorage?.removeItem('access-token')
        localStorage?.removeItem('refresh-token')
          return (
            <>{children}</>
          )
      }else {
        return navigate('/')
      }
    })
  }
  return (
    <>{children}</>
  )
}

export const IsCustomer = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const { profile: { profile: { role } } } = useSelector(state => state)
  useEffect(() => {
    setToken(localStorage.getItem('access-token'))
  }, [])
  if (!token) {
    return navigate('/login')
  } else {
    if (role === "seller") {
      Swal.fire({
        title: 'Caution!',
        text: 'You Logged as Seller',
        icon: 'warning',
        confirmButtonText: 'Oke'
      })
      return navigate('/seller/profile')
    }
  }
  return (
    <>{children}</>
  )
}

export const IsSeller = ({ children }) => {
  const navigate = useNavigate()
  const [token, setToken] = useState()
  const { profile: { profile: { role } } } = useSelector(state => state)
  useEffect(() => {
    setToken(localStorage.getItem('access-token'))
  }, [])
  if (!token) {
    return navigate('/login')
  } else {
    if (role === "customer") {
      Swal.fire({
        title: 'Caution!',
        text: 'Your Account Registered as Customer',
        icon: 'warning',
        confirmButtonText: 'Oke'
      })
      return navigate('/users/profile')
    }
  }
  return (
    <>{children}</>
  )
}


