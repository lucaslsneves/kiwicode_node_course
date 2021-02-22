import React from 'react'
import { ContainerMaxWidth } from '../MaxWidthContainer'
import SectionTitle from '../SectionTitle'
import { Container, Content, Color } from './styles'

function AboutSection () {
  return (
    <Color>
      <ContainerMaxWidth color="#fff">
        <Container>

          <img src="/about.png" alt="Sobre o curso" />
          <Content>
            <SectionTitle color={'#222'}>O que iremos construir</SectionTitle>
            <p>
              Nós iremos construir uma API em NodeJs e Typescript que gerencia uma Academia de Musculação.
              Utilizando TDD com testes unitários e testes de integração automatizados,
              Clean Architecture,princípios do SOLID e Docker.<br/>No final ainda vamos subir essa API em produção!
              A missão da Kiwi Code com esse treinamento é te tornar apto e confiante para assumir vagas de nível pleno e sênior!
            </p>
          </Content>

        </Container>
      </ContainerMaxWidth>
    </Color>
  )
}

export default AboutSection
