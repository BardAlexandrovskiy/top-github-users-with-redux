import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;

  @media (max-width: 736px) {
    padding: 3px 10px 0 10px;
  }
`

export const Input = styled.input`
  border: 1px solid rgb(142, 162, 182);
  border-right-color: transparent;
  padding: 10px;
  width: 300px;
  border-radius: 50px 0 0 50px;
  text-align: center;

  &:focus {
    border-color: #24292e;
    border-right-color: transparent;
  }

  &:focus + button {
    border: 1px solid #24292e;
    border-left-color: transparent;
  }
`

export const Button = styled.button`
  background-color: #fff;
  width: 40px;
  padding-right: 5px;
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  border: 1px solid rgb(142, 162, 182);
  border-left-color: transparent;

  &:hover svg {
    opacity: 0.6;
  }
`
