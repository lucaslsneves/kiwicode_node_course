import React from 'react'
import { ContainerMaxWidth } from '../MaxWidthContainer'
import SectionTitle from '../SectionTitle'
import { Grid, Container } from './styles'

function TechsSection () {
  return (
    <ContainerMaxWidth>
      <Container>

        <SectionTitle color="#fff">Tecnologias utilizadas</SectionTitle>
        <Grid>
          <img src="/node.svg" alt="Ícone do NodeJS" />
          <img src="/jest.svg" alt="Ícone do Jest " />
          <img src="/express.svg" alt="Ícone do Express" />
          <img src="/typescript.svg" alt="Ícone do Typescript" />
          <img src="docker.svg" alt="Ícone do Docker" />
          <img src="mongo.svg" alt="Ícone do Mongo DB" />
        </Grid>
      </Container>
    </ContainerMaxWidth>
  )
}

export default TechsSection
