import React from 'react'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import IntroSection from '../components/IntroSection1'
import AboutSection from '../components/AboutSection'
import JobsSection from '../components/JobsSection'
import { MainColorContainer } from '../components/MainColorContainer'
import TechsSection from '../components/TechsSection'
import ConceptsSection from '../components/ConceptsSection'

function IndexPage () {
  return (
    <MainColorContainer>
      <Header />
      <IntroSection />
      <AboutSection />
      <TechsSection/>
      <JobsSection/>
      <ConceptsSection/>
      <GlobalStyle />
    </MainColorContainer>
  )
}

export default IndexPage
