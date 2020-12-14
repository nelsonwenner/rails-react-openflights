import styled from 'styled-components'

export const Nav = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 1300px) {
    padding: 0 2rem;
  }
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Item = styled.li`
  border-bottom: 2px solid transparent;
  margin-right: 3rem;

  &:last-child {
    margin-right: 0;
  }
`

export const Brand = styled.div`
  font-weight: bold;
  font-size: 2.2rem;
`
