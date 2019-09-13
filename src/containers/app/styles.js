import styled from 'styled-components'

export const Main = styled.main`
  position: relative;
  min-height: calc(100% - 70px);
`

export const UsersList = styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style-type: none;
  padding: 10px 0;

  @media (max-width: 736px) {
    padding: 3px 10px;
    width: 100%;
  }
`
