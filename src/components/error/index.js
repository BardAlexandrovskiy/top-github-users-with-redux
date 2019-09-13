import React from 'react'
import PropTypes from 'prop-types'
import { LockContainer, ErrorContainerDiv, Text, Button } from './styles'

export default function ErrorContainer({ display, handleClickErrorButton }) {
  return (
    <LockContainer style={{ display: display }}>
      <ErrorContainerDiv>
        <Text>Ошибка</Text>
        <Button type="button" onClick={handleClickErrorButton}>
          Ок
        </Button>
      </ErrorContainerDiv>
    </LockContainer>
  )
}

ErrorContainer.propTypes = {
  display: PropTypes.string.isRequired,
  handleClickErrorButton: PropTypes.func.isRequired,
}
