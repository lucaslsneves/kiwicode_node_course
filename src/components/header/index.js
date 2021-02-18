import React from 'react'

import { StyledHeader, Logo } from './styles'

function Header () {
  return <StyledHeader>
    <div>
      <Logo src="/kiwi-yout.png"></Logo>
      <h1>Kiwi Code</h1>
    </div>
  </StyledHeader>
}

export default Header
