import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  width: 300px;
  margin: 0 auto;

  @media (max-width: 736px) {
    padding: 3px 10px 0 10px;
    width: 100%;
  }
`

export const Input = styled.input`
  border: 1px solid rgb(142, 162, 182);
  padding: 10px 50px;
  border-radius: 50px;
  text-align: center;
  width: 100%;

  &:focus {
    border-color: #24292e;
  }
`

export const Button = styled.button`
  cursor: pointer;
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(-50%);

  &:hover svg {
    opacity: 0.6;
  }

  @media (max-width: 736px) {
    top: calc(50% + 1.5px);
    right: 20px;
  }
`
