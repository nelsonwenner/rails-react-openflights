import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const Column = styled.div`
  max-width: 50%;
  width: 50%;
  height: 100vh;
  float: left;
  background: #fff;

  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    background: black;
    border-top: 1px solid rgba(255,255,255,0.5);
  }
`

export const Main = styled.div`
  padding-left: 6rem;
`
