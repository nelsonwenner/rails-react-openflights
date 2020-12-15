import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-system-grid';
import { Nav, Brand, Menu, Item } from './styles'
import { useProvider } from '../../../providers/Provider'

export default (props) => {
  const { isAuth, logout } = useProvider()
  
  return (
    <Nav as={ Container }>
      <Brand as={ Link } to='/'>OpenFlights</Brand>
      <Menu>
        {
          isAuth ?
          <Fragment>
            <Item><Link to='/'>Home</Link></Item> 
            <Item><a onClick={ logout }>Log Out</a></Item> 
          </Fragment> :
          <Fragment>
            <Item><Link to='/login'>Login</Link></Item> 
            <Item><Link to='/register'>Signup</Link></Item> 
          </Fragment>
        }
      </Menu>
    </Nav>
  )
}
