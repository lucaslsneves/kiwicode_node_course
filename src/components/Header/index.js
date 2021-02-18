import React from 'react'
import { ContainerMaxWidth } from '../MaxWidthContainer'

import { StyledHeader, Logo } from './styles'

function Header () {
  return (
    <ContainerMaxWidth>
    <StyledHeader>
      <div>
        <Logo src="/kiwi-yout.png"></Logo>
        <h1>Kiwi Code</h1>
      </div>
    </StyledHeader>
    </ContainerMaxWidth>
  )
}

export default Header
