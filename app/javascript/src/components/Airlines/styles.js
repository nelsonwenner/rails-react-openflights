import React from 'react'
import styled from 'styled-components'

export const Home = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 100%;
  padding: 2rem;

  > div {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 2rem;
  }
`
