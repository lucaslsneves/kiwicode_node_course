import React from 'react'
import ListItem from '../ListItem'
import { ContainerMaxWidth } from '../MaxWidthContainer'
import { Container, Title } from './styles'

function IntroSection () {
  return (
    <ContainerMaxWidth>
    <Container>
      <div>
        <Title>
          <h1>Curso <span>Clean NodeJs</span></h1>
          <img src="/node.svg"></img>
        </Title>
        <div>
          <p>
            Aprenda a criar uma API utilizando boas práticas como:
        </p>
          <ul>
          <ListItem>Clean Architecture</ListItem>
          <ListItem>TDD</ListItem>
          <ListItem>SOLID</ListItem>
          </ul>
        </div>
        <h2>
          E conquiste os <strong>maiores salários</strong> do mercado de trabalho!
        </h2>
      </div>
      <img src="/section1.png"></img>
    </Container>
    </ContainerMaxWidth>
  )
}

export default IntroSection
