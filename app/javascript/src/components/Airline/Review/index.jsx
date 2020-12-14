import React from 'react'
import Rating from '../../common/Rating'
import Avatar from '../Avatar'
import { 
  Card,
  RatingContainer,
  AvatarWrapper,
  Author,
  Description,
  Title,
  Options,
  Icon
 } from './styles'

export default ({attributes, ...props}) => {
  const {title, description, score} = attributes
  
  return (
    <Card>
      <RatingContainer>
        <AvatarWrapper><Avatar/></AvatarWrapper>
        <Rating score={score}/>
        <Author>{attributes.email}</Author>
      </RatingContainer>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
        { 
          attributes.email &&
          <Options>
            <Icon onClick={props.handleDestroy.bind(this, props.id)}>
              <i className="fa fa-trash"></i>
            </Icon>
            <Icon>
              <i className="fa fa-pencil"></i>
            </Icon>
          </Options>
        }
    </Card>
  )
}
