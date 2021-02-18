import React from 'react'
import { VscDebugBreakpointLogUnverified } from 'react-icons/vsc'
import { Container } from './styles'
function ListItem ({ children }) {
  return (
    <Container>
      <VscDebugBreakpointLogUnverified size={20} color={'#00d56f'}/>
      <span>{children}</span>
    </Container>
  )
}

export default ListItem
