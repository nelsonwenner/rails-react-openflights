import React, { useState} from 'react'
import { useProvider } from '../../providers/Provider'
import {
  SignUpWrapper,
  FormContainer,
  FormWrapper,
  LoginButton,
  Input,
  Field,
  Form
} from './styles'

export default (props) => {
  const [user, setUser] = useState({ email: '', password: ''})
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const { signup } = useProvider()

  return (
    <SignUpWrapper>
      <FormWrapper>
        <FormContainer>
          <Form onSubmit={signup.bind(this, user, props)}>
            <h1>Sign Up</h1>
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
            <LoginButton type="submit">Register</LoginButton>
          </Form>   
        </FormContainer>
      </FormWrapper>
    </SignUpWrapper>
  )
}
