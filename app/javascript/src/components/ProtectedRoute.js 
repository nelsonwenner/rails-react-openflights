import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useProvider } from './providers/Provider'

export default ({ component: Component, ...rest }) => {
  const { isAuth } = useProvider()
  
  return (
    <Route
      render={props =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    />
  )
}
