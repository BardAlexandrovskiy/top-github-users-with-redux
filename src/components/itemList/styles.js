import styled from 'styled-components'

export const ListItemLi = styled.li`
  min-height: 100px;
  border-bottom: 1px solid rgb(206, 206, 206);
  padding: 20px 0;
  position: relative;

  &:first-child {
    border-top: 1px solid rgb(206, 206, 206);
  }
`

export const AvatarDivContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: top;
`
export const Avatar = styled.img`
  width: inherit;
  height: inherit;
`
export const Content = styled.div`
  width: calc(100% - 100px);
  display: inline-block;
  vertical-align: top;
`
export const Login = styled.a`
  color: rgb(45, 111, 153);
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
`

export const Name = styled.p`
  display: inline-block;
  margin-bottom: 5px;
`
export const Bio = styled.p`
  margin-bottom: 5px;
`

export const Location = styled.div`
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
`
export const LocationName = styled.p`
  display: inline-block;
  vertical-align: middle;
`
export const Email = styled.div`
  display: inline-block;
  vertical-align: middle;
`
export const EmailText = styled.p`
  display: inline-block;
  vertical-align: middle;
`

export const Icon = styled.svg`
  vertical-align: middle;
  width: 14px;
  height: 18px;
  margin-right: 3px;
`
