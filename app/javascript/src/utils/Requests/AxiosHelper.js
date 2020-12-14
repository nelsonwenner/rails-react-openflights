import axios from 'axios'

export default () => {
  const csrfToken = document.querySelector('[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
}
