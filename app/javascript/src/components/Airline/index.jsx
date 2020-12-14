import React,{ useRef, useState, useEffect } from 'react'
import AxiosHelper from '../../utils/Requests/AxiosHelper'
import axios from 'axios'

export default (props) => {
  const [airline, setAirline] = useState({})
  const [reviews, setReviews] = useState([])
  const [review, setReview] = useRef({title: '', description: '', score: 0})
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug

    axios.get(`api/v1/airlines/${slug}`)
    .then(res => {
      setAirline(res.data)
      setReviews(res.data.included)
      setLoaded(true)
    })
    .catch(data => console.error('Error ', data))
  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    AxiosHelper()

    const airline_id = parseInt(airline.data.id)
    axios.post('/api/v1/reviews', { ...review, airline_id })
    .then(res => {
      setReviews((prev) => ([...prev, res.data.data]))
      setReview({title: '', description: '', score: 0})
      setError('')
    })
    .catch(res => {
      let error
      switch (res.message) {
        case 'Request failed with status code 401':
          error = 'Please log in to leave a review'
          break
        default:
          error = 'Something went wrong'
      }
      setError(error)
    })
  }
  
  const handleDestroy = (id, e) => {
    e.preventDefault()

    AxiosHelper()

    axios.delete(`/api/v1/reviews/${id}`)
    .then(data => {
      const included = [...reviews]
      const index = included.findIndex(data => data.id == id)
      included.splice(index, 1)

      setReviews(included)
    })
    .catch(data => console.error('Error ', data))
  }

  const setRating = (score, e) => {
    e.preventDefault()
    setReview({ ...review, score })
  }

  let total, average = 0
  let userReviews

  if (reviews && reviews.length > 0) {
    total = reviews.reduce((total, review) => total + review.attributes.score, 0)
    average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0

    userReviews = reviews.map((review, index) => { 
      return (
        
      )
    })
  }

  return (
   
  )
}
