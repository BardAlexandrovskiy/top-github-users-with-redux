import styled from 'styled-components'

export const LockContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`
export const ErrorContainerDiv = styled.div`
  display: flex;
  width: 50%;
  height: 200px;
  background-color: #24292e;
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #d8dee2;
`
export const Text = styled.p`
  font-size: 1.4rem;
  color: #fff;
`
export const Button = styled.button`
  background-color: #d8dee2;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
`
