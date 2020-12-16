import React from 'react'
import './styles.css'
import { Route, Switch } from 'react-router-dom'
import { Provider } from './providers/Provider'
import UnprotectedRoute from './UnprotectedRoute'
import { Header } from './theme/Header'
import Register from './Auth/Register'
import Airlines from './Airlines'
import Airline from './Airline'
import Login from './Auth/Login'

export default () => (
  <Provider>
    <Header />
    <Switch>
      <Route exact path="/" component={ Airlines } />
      <Route exact path="/airlines/:slug" component={ Airline } />
      <UnprotectedRoute path="/login" component={ Login }/>
      <UnprotectedRoute exact path="/register" component={ Register } />
    </Switch> 
  </Provider>
)
