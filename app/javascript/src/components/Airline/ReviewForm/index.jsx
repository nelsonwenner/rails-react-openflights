import React,{ Fragment } from 'react'

export default (props) => {

  const ratingOptions = [5,4,3,2,1].map((score, index) => (
    <Fragment key={ index }>
      <input 
        type="radio" 
        value={score} 
        checked={props.review.score == score} 
        onChange={()=>console.log('onChange')} 
        name="rating" 
        id={`rating-${score}`}
      />
      <label onClick={props.setRating.bind(this, score)}></label>
    </Fragment>
  ))

  return (
    <ReviewWrapper>
      <form onSubmit={props.handleSubmit}>
        <ReviewHeadline>
          Have An Experience with {props.name}? Add Your Review!
        </ReviewHeadline>
        <Field>
          <input 
            onChange={props.handleChange} 
            type="text" 
            name="title" 
            placeholder="Review Title" 
            value={props.review.title}
          />
        </Field>
        <Field>
          <input 
            onChange={props.handleChange} 
            type="text" 
            name="description" 
            placeholder="Review Description" 
            value={props.review.description}
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingBoxTitle>Rate This Airline</RatingBoxTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="Submit">Create Review</SubmitBtn>
        { 
          props.error && 
          <Error>{props.error}</Error>
        }
      </form>
    </ReviewWrapper>
  )
}
