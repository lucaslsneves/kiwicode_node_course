import React from 'react'
import { Container } from './styles'
function ListItem ({ children, fontSize = 20 }) {
  return (
    <Container fontSize={fontSize}>
      <span>{children}</span>
    </Container>
  )
}

export default ListItem
