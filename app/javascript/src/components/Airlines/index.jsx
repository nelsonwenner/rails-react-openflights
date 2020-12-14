import React,{ useState, useEffect } from 'react'
import { Home, Grid } from './styles'
import Airline from './Airline'
import Header from './Header'
import axios from 'axios'

export default () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios.get('/api/v1/airlines')
    .then(res => {
      console.log(res)
      setAirlines(res.data.data)
    })
    .catch(res => console.error(res))
  }, [airlines.length])

  const grid = airlines.map((airline, index) => (
    <Airline 
      key={ index }
      name={ airline.attributes.name }
      image_url={ airline.attributes.image_url }
      slug={ airline.attributes.slug }
      score={ airline.attributes.averageScore }
    />
  ))
  
  return (
    <Home>
      <Header />
      <Grid>
        { grid }
      </Grid>
    </Home>
  )
}
