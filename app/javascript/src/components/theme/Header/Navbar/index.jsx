import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-system-grid';
import { Nav, Brand, Menu, Item } from './styles'

export default (props) => {
  return (
    <Nav as={ Container }>
      <Brand as={ Link } to='/'>OpenFlights</Brand>
      <Menu>
        <Fragment>
          <Item><Link to='/login'>Login</Link></Item> 
          <Item><Link to='/register'>Signup</Link></Item> 
        </Fragment>
      </Menu>
    </Nav>
  )
}
