import React from 'react'
import { PreloaderContainer, PreloaderItem } from './styles'

export default function Preloader({ style }) {
  return (
    <PreloaderContainer style={style}>
      <PreloaderItem />
      <PreloaderItem />
      <PreloaderItem />
      <PreloaderItem />
    </PreloaderContainer>
  )
}
