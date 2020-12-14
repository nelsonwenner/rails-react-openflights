import React from 'react'
import { Link } from 'react-router-dom'
import { AirlineBrand, AirlineName, Card, LinkWrapper } from './styles'

export default ({ score, name, slug, image_url }) => {
  const averageScore = parseFloat(score / 100)
  
  return (
    <Card>
      <AirlineBrand>
        <img src={ image_url } alt={ name } width='50' />
      </AirlineBrand>
      <AirlineName>
        { name }
      </AirlineName>
      <LinkWrapper>
        <Link to={`/airlines/${slug}`} >View Airline</Link>
      </LinkWrapper>
    </Card>
  )
}
