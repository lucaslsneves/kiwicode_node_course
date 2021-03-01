import React from 'react'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import PriceSection from '../components/PriceSection'
import IntroSection from '../components/IntroSection1'
import AboutSection from '../components/AboutSection'
import QuestionSection from '../components/QuestionSection'
import JobsSection from '../components/JobsSection'
import { MainColorContainer } from '../components/MainColorContainer'
import TechsSection from '../components/TechsSection'
import ConceptsSection from '../components/ConceptsSection'
import BonusSection from '../components/BonusSection'
import FooterSection from '../components/FooterSection'

function IndexPage () {
  return (

      <MainColorContainer>
        <Header />
        <IntroSection />
        <AboutSection />
        <TechsSection />
        <JobsSection />
        <ConceptsSection />
        <BonusSection />
        <PriceSection />
        <QuestionSection />
        <FooterSection/>
        <GlobalStyle />
      </MainColorContainer>

  )
}

export default IndexPage
