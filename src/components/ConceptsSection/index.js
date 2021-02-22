import React from 'react'
import ListItem from '../ListItem'
import { ContainerMaxWidth } from '../MaxWidthContainer'

import { Container, Color } from './styles'

function ConceptsSection () {
  return (

    <Color>
      <ContainerMaxWidth>
        <Container>
          <h1>Conceitos que você vai aprender</h1>
            <ul>
              <ListItem>Clean Architecture</ListItem>
              <ListItem>TDD</ListItem>
              <ListItem>Testes unitários</ListItem>
              <ListItem>Testes de integração</ListItem>
              <ListItem>Criar uma imagem da sua aplicação com Docker</ListItem>
              <ListItem>Rodar sua aplicação em um container</ListItem>
            </ul>
        </Container>
      </ContainerMaxWidth>
    </Color>
  )
}

export default ConceptsSection
