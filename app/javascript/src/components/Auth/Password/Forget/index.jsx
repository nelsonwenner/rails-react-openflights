import React, { useState } from 'react'
import { useProvider } from '../../../providers/Provider'
import {
  ForgotPassWrapper,
  ForgotPassButton,
  FormContainer,
  FormWrapper,
  Field,
  Form,
  Input
} from './styles'

export default (props) => {
  const [user, setUser] = useState({ email: '', password: '' })
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const { forgotPass } = useProvider()

  return (
    <ForgotPassWrapper>
      <FormWrapper>
        <FormContainer>
          <Form onSubmit={forgotPass.bind(this, user, props)}>
            <h1>Forgot Password</h1>
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
            <ForgotPassButton type="submit">ForgotPass</ForgotPassButton>
          </Form>   
        </FormContainer>
      </FormWrapper>
    </ForgotPassWrapper>
  )
}
