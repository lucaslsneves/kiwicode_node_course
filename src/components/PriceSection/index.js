import React from 'react'
import { ContainerMaxWidth } from '../MaxWidthContainer'
import ListItem from '../ListItem'
import { Container, Pricing } from './styles'

function PriceSection () {
  return (
    <ContainerMaxWidth>
      <Container>
        <div>
          <h1>Preço exclusivo para 1ª turma, apenas:</h1>
          <Pricing>
            <h2>
              <span>12x</span>  R$ 22,99
              </h2>
          </Pricing>
          <ul>
            <ListItem>
              Apenas a 1ª turma receberá os bonûs exclusivos
          </ListItem>
            <ListItem>
              Vagas limitadas
          </ListItem>
            <ListItem>
              Acesso vitalício
          </ListItem>
            <ListItem>
              Acesso a todas atualizações de conteúdo
          </ListItem>
            <ListItem>
              Suporte para tirar dúvidas
          </ListItem>
            <ListItem>
              Garantia incondicional
          </ListItem>
          </ul>
          <a><span>Comprar</span><h2>R$ 297 <br /><span>à vista</span></h2></a>
        </div>
        <img src="/pricing.png" alt="Curso NodeJs Clean Architecture" />
      </Container>

    </ContainerMaxWidth>
  )
}

export default PriceSection
