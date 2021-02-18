import React from 'react'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import IntroSection from '../components/IntroSection1'
import AboutSection from '../components/AboutSection'
import { MainColorContainer } from '../components/MainColorContainer'

function IndexPage () {
  return (
    <MainColorContainer>
      <Header />
      <IntroSection />
      <AboutSection />
      <GlobalStyle />
    </MainColorContainer>
  )
}

export default IndexPage
