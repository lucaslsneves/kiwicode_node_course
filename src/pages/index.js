import React from 'react'
import { MainContainer } from '../components/MainContainer'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import IntroSection from '../components/IntroSection1'
import AboutSection from '../components/AboutSection'

function IndexPage () {
  return (
    <MainContainer>
      <Header />
      <IntroSection/>
      <AboutSection/>
      <GlobalStyle />
    </MainContainer>
  )
}

export default IndexPage
