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
          <div>
            <img src="/node.svg" alt="Ícone do NodeJS" />
            <h3>NodeJS</h3>
          </div>
          <div>
            <img src="/jest.svg" alt="Ícone do Jest " />
            <h3>Jest</h3>
          </div>
          <div>
            <img src="/express.svg" alt="Ícone do Express" />
            <h3>Express</h3>
          </div>
          <div>
            <img src="/typescript.svg" alt="Ícone do Typescript" />
            <h3>Typescript</h3>
          </div>
          <div>
            <img src="docker.svg" alt="Ícone do Docker" />
            <h3>Docker</h3>
          </div>
          <div>
            <img src="mongo.svg" alt="Ícone do Mongo DB" />
            <h3>MongoDB</h3>
          </div>
        </Grid>
      </Container>
    </ContainerMaxWidth>

  )
}

export default TechsSection
