import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

export const AirlineBrand = styled.div`
  height: 5rem;

  img {
    height: 5rem;
    width: 5rem;
    border: 1px solid rgba(0,0,0,0,0.1);
    border-radius: 100%;
  }
`

export const AirlineName = styled.div`
  padding: 2rem 0 1rem 0;
  color: #181818;
`

export const LinkWrapper = styled.div`
  margin: 3rem 0 2rem 0;
  height: 5rem;

  a {
    min-height: 4rem;
    width: 100%;
    border-radius: 0.4rem;
    padding: 1rem 5rem;
    margin: 0.7rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 2rem;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    background-color: #71b406;
    transition: ease-in-out 0.1s;

    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`
