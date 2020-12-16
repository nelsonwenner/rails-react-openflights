import React, { useEffect, useState }  from 'react'
import { useProvider } from '../../../providers/Provider'
import {
  FormContainer,
  ResetButton,
  FormWrapper,
  ResetWrapper,
  Field,
  Form,
  Input
} from './styles'

export default (props) => {
  const [user, setUser] = useState({ email: '', password: '' })
  const [token, setToken] = useState('')
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
  const { resetPass } = useProvider()

  useEffect( ()=> {
    console.log(props)
    const token = props.location.search.split('token=')[1].split('&')[0]
    setToken(token)
  }, [])

  return (
    <ResetWrapper>
      <FormWrapper>
        <FormContainer>
          <Form onSubmit={resetPass.bind(this, user, token)}>
            <h1>Reset Password</h1>
            <Field>
              <label>New Password</label>
              <Input 
                onChange={handleChange} 
                type="password" 
                value={user.password} 
                placeholder="password" 
                name="password"
              />
            </Field>
            <ResetButton type="submit">Save Password</ResetButton>
          </Form>   
        </FormContainer>
      </FormWrapper>
    </ResetWrapper>
  )
}
