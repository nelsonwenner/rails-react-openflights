import React, { createContext, useContext, useState, useEffect } from 'react';
import AxiosHelper from '../../utils/Requests/AxiosHelper'
import Authenticate from '../../utils/Auth/Authenticate'
import axios from 'axios'

const ProviderContext = createContext()
export const useProvider = () => useContext(ProviderContext)

export const Provider = ({ children }) => {
  const [state, setState] = useState({isAuth: false, email: ''})
  
  useEffect(() => {
    Authenticate()
    .then(res => setState({ ...res }))
    .catch(err => console.error(err))
  }, [])

  const login = (user, props, e) => {
    e.preventDefault()

    AxiosHelper()
    axios.post('/api/v1/auth', { user: { ...user } }, { withCredentials: true })
    .then(res => {
      setState({ isAuth: true })
      props.history.push('/')
    })
    .catch(err => console.log(err))
  }

  const signup = (user, props, e) => {
    e.preventDefault()

    AxiosHelper()
    axios.post('/api/v1/registrations', { user: { ...user } }, { withCredentials: true })
    .then(res => {
      setState({ isAuth: true })
      props.history.push('/')
    })
    .catch(err => console.error(err))
  }

  const forgotPass = (user, props, e) => {
    e.preventDefault()

    AxiosHelper()
    axios.post('/api/v1/auth/password/forgot', { email: user.email })
    .then(res => {
      setState({ isAuth: false })
      props.history.push('/forgot-password/complete?success=true')
    })
    .catch(err => console.error(err))
  }

  const resetPass = (user, token, e) => {
    e.preventDefault()

    AxiosHelper()
    axios.post('/api/v1/auth/password/reset', { password: user.password, token })
    .then(res => {
      setState({ isAuth: false })
      window.location.href = "/login"
    })
    .catch(err => console.error(err))
  }

  const logout = (e) => {
    e.preventDefault()

    AxiosHelper()
    axios.delete('/api/v1/auth/logout')
    .then(res => {
      setState({ isAuth: false })
      window.location.href = '/'
    })
    .catch( err => console.error(err))
  }
  
  return (
    <ProviderContext.Provider 
      value={{ 
        signup, 
        login, 
        logout, 
        forgotPass, 
        resetPass,
        isAuth: state.isAuth,
        email: state.email,
      }}
    >
      { children }
    </ProviderContext.Provider>
  )
}
