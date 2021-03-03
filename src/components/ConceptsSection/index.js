import React from 'react'
import ListItem from '../ListItem'
import SectionTitleBottom from '../SectionTitleBottom'
import { ContainerMaxWidth } from '../MaxWidthContainer'

import { Container } from './styles'

function ConceptsSection () {
  return (

      <ContainerMaxWidth>
        <SectionTitleBottom>Conceitos que você irá aprender</SectionTitleBottom>
        <Container>
          <ul>
            <ListItem fontSize={18}>Clean Architecture</ListItem>
            <ListItem fontSize={18}>TDD</ListItem>
            <ListItem fontSize={18}>Testes unitários</ListItem>
            <ListItem fontSize={18}>Testes de integração</ListItem>
            <ListItem fontSize={18}>Segurança em NodeJs</ListItem>
            <ListItem fontSize={18}>Criar uma imagem da sua aplicação com Docker</ListItem>

          </ul>
          <ul>
            <ListItem fontSize={18}>Rodar sua aplicação em um container</ListItem>
            <ListItem fontSize={18}>Design Patterns</ListItem>
            <ListItem fontSize={18}>Typescript</ListItem>
            <ListItem fontSize={18}>SOLID</ListItem>
            <ListItem fontSize={18}>Git flow</ListItem>
            <ListItem fontSize={18}>Subir uma aplicação em produção</ListItem>
          </ul>
        </Container>
      </ContainerMaxWidth>

  )
}

export default ConceptsSection
