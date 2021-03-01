import React from 'react'
import { AiOutlineCopyrightCircle, AiFillYoutube } from 'react-icons/ai'
import { ContainerMaxWidth } from '../MaxWidthContainer'
import { Container } from './styles'
function FooterSection () {
  return (
    <ContainerMaxWidth>
      <Container>
          <div>
          <AiOutlineCopyrightCircle size={20}/>
          <h1>Kiwi Code todos os direitos reservados</h1>
          </div>
          <a href="https://www.youtube.com/channel/UCNhqGgjgKZ4kUvc8v05HQAQ" rel="noreferrer" target="_blank"><AiFillYoutube size={25} color={'#fff'}/></a>
      </Container>
    </ContainerMaxWidth>
  )
}

export default FooterSection
