import React from 'react'
import { MainContainer } from '../components/MainContainer'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import IntroSection from '../components/IntroSection1'

function IndexPage () {
  return (
    <MainContainer>
      <Header />
      <IntroSection/>
      <GlobalStyle />
    </MainContainer>
  )
}

export default IndexPage
