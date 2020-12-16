import React from 'react'
import { useProvider } from '../../providers/Provider'
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
  const { isAuth, email } = useProvider()
  
  return (
    <Card>
      <RatingContainer>
        <AvatarWrapper>
          <Avatar/>
        </AvatarWrapper>
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
          isAuth &&
          email === attributes.email &&
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
