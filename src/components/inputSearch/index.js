import React from 'react'
import { Container, Input, Button } from './styles'

export default class InputSearch extends React.Component {
  handleChange = e => {
    const { setValue } = this.props
    const value = e.target.value
    setValue(value)
  }

  handleClickInputSearch = () => {
    const { inputSearchPress, value, getUsersTop } = this.props
    if (value.trim()) {
      inputSearchPress()
      getUsersTop()
    }
  }

  handlePressInputSearch = e => {
    const { inputSearchPress, value, getUsersTop } = this.props
    if (e.keyCode === 13 && value.trim()) {
      inputSearchPress()
      getUsersTop()
    }
  }

  render() {
    const { value } = this.props
    return (
      <Container>
        <Input
          placeholder="Введите город(на английском)"
          value={value}
          onChange={this.handleChange}
          onKeyDown={this.handlePressInputSearch}
        />
        <Button onClick={this.handleClickInputSearch}>
          <svg fill="black" width="20" height="20" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </Button>
      </Container>
    )
  }
}
