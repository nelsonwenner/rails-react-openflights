import React from 'react'
import './styles.css'
import { Route, Switch } from 'react-router-dom'
import Airlines from './Airlines'
import Airline from './Airline'
import { Header } from './theme/Header'

export default () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={ Airlines } />
      <Route exact path="/airlines/:slug" component={ Airline } />
    </Switch> 
  </>
)
