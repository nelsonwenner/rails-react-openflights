import styled from 'styled-components'

export const Nav = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1299px) {
    padding: 0 2rem;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`

export const Item = styled.li`
  border-bottom: 2px solid transparent;
  margin-right: 3rem;

  &:nth-last-child(1) {
    margin-right: 0;
  }

  @media only screen and (max-width:960px) { 
    width: 100%;

    &:hover {
      border: none;
    } 
  }
`

export const Brand = styled.div`
  font-weight: bold;
  font-size: 2.2rem;

  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`
