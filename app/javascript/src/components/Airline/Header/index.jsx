import React from 'react'
import { Wrapper, UserReviewCount, ScoreOutOf } from './styles'
import Rating from '../../common/Rating'

export default ({attributes, reviews, average, ...props}) => {
  const { image_url, name } = attributes

  return (
    <Wrapper>
      <h1><img src={image_url} height="50" width="50" alt={name} /> {name}</h1>
      <div>
        <UserReviewCount>
          <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews
        </UserReviewCount>
        <Rating score={average} />
        <ScoreOutOf>{average.toFixed(1)} out of 5 stars</ScoreOutOf>       
      </div>
    </Wrapper> 
  )
}
