import axios from 'axios'

export default async () => {
  let auth = { isAuth: false, email: '' }
  await axios.get('/api/v1/auth/me', { withCredentials: true })
  .then( resp => {
    auth = { isAuth: resp.data.logged_in, email: resp.data.email }
    return auth
  })
  .catch( err => console.log(err))

  return auth
}
