import React from 'react'
import { Container } from './styles'
function ListItem ({ children }) {
  return (
    <Container>
      <span>{children}</span>
    </Container>
  )
}

export default ListItem
