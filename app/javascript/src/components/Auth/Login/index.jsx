import React, { useState } from 'react';
import { useProvider } from '../../providers/Provider'
import {
  LoginWrapper,
  LoginButton,
  FormContainer,
  FormWrapper,
  Form,
  Input,
  Field
} from './styles'

export default (props) => {
  const [user, setUser] = useState({ email: '', password: '', auth: false, loading: true })
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const { login } = useProvider()

  return (
    <LoginWrapper>
      <FormWrapper>
        <FormContainer>
          <Form onSubmit={login.bind(this, user, props)}>
            <h1>Log In</h1>
            <Field>
              <label>Email</label>
              <Input 
                onChange={handleChange} 
                type="email" 
                value={user.email} 
                placeholder="email" 
                name="email"
              />
            </Field>
            <Field>
              <label>Password</label>
              <Input 
                onChange={handleChange} 
                type="password"
                value={user.password} 
                placeholder="password" 
                name="password"
              />
            </Field>
            <LoginButton type="submit">Login</LoginButton>
          </Form>   
        </FormContainer>
      </FormWrapper>
    </LoginWrapper>
  )
}
