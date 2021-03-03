import React from 'react'
import SectionTitleBottom from '../SectionTitleBottom'
import { ContainerMaxWidth } from '../MaxWidthContainer'

import { Container, Bonus } from './styles'

function BonusSection () {
  return (
    <ContainerMaxWidth>
      <SectionTitleBottom>Super Bonûs</SectionTitleBottom>
      <Container>
        <Bonus>
          <h2>Treinamento<br/> Segurança com NodeJs</h2>
          <img src="/node.svg" alt="Curso Segurança com NodeJs"/>
          <p>Segurança é um tópico extremamente importante e que você não encontra muitos conteúdos na internet.<br/>
              </p>
          <div><span>R$ 497,00</span><strong> de graça!</strong></div>
        </Bonus>
        <Bonus>
          <h2>Treinamento <br/> Design Patterns com Typescript</h2>
          <img src="/typescript.svg" alt="Curso Segurança com NodeJs"/>
          <p>Você irá aprender Design Patterns com exemplos reais!</p>
          <div><span>R$ 497,00</span><strong> de graça!</strong></div>
        </Bonus>
      </Container>
    </ContainerMaxWidth>
  )
}

export default BonusSection
