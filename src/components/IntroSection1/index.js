import React from 'react'
import ListItem from '../ListItem'
import { Container, Title } from './styles'

function IntroSection () {
  return (
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
          <ListItem>Clean Architecture</ListItem>
          <ListItem>TDD</ListItem>
          <ListItem>SOLID</ListItem>
        </div>
        <h2>
          E conquiste os maiores salários do mercado de trabalho!
        </h2>
      </div>
      <img src="/section1.png"></img>
    </Container>
  )
}

export default IntroSection
