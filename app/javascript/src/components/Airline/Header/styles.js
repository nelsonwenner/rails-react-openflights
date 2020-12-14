import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  color: #181818;
  
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`

export const UserReviewCount = styled.div`
  font-size: 18px;
  padding:10px 0;
  color: #181818;
`

export const ScoreOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #181818;
`