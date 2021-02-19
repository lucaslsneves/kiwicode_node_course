import React from 'react'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import IntroSection from '../components/IntroSection1'
import AboutSection from '../components/AboutSection'
import JobsSection from '../components/JobsSection'
import { MainColorContainer } from '../components/MainColorContainer'
import TechsSection from '../components/TechsSection'

function IndexPage () {
  return (
    <MainColorContainer>
      <Header />
      <IntroSection />
      <AboutSection />
      <TechsSection/>
      <JobsSection/>
      <GlobalStyle />
    </MainColorContainer>
  )
}

export default IndexPage
