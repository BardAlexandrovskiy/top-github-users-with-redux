import styled from 'styled-components'

export const HeaderComponent = styled.header`
  background-color: #24292e;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
`

export const Title = styled.h1`
  font-size: 30px;

  @media (max-width: 736px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    font-size: 17px;
  }
`

export const Description = styled.p`
  font-size: 20px;

  @media (max-width: 736px) {
    font-size: 17px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }
`

export const Logo = styled.svg`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 736px) {
    left: 10px;
  }
`
