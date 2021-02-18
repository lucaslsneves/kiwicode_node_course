import React from 'react'

import { Container, Content, Title } from './styles'

function AboutSection () {
  return (
    <Container>
      <img src="/about.png" alt="Sobre o curso" />
      <Content>
        <Title><h1>O que iremos construir</h1></Title>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat laudantium doloribus molestias inventore architecto cupiditate distinctio aliquam, perspiciatis error delectus
          commodi culpa officiis expedita perferendis non temporibus? Temporibus, exercitationem deleniti?
      </p>
      </Content>
    </Container>
  )
}

export default AboutSection
