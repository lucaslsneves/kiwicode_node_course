import ListItem from '../ListItem'
import { ContainerMaxWidth } from '../MaxWidthContainer'
import SectionTitle from '../SectionTitle'
import { Color, Content, Jobs, JobItem } from './styles'
export default function JobsSection () {
  return (

    <Color>
      <ContainerMaxWidth>
        <Content>
          <SectionTitle color={'#222'}>Vagas no mercado de trabalho</SectionTitle>
          <p>O mercado de trabalho está necessitando de profissionais
          que saibam desenvolver softwares de qualidade.<br /> <strong>Com o conhecimento do curso você estará apto
          para ocupar vagas de desenvolvedor nível Pleno ou até vagas nível Sênior</strong>!
        </p>
          <Jobs>
            <JobItem backgroundColor="#fff">
              <h3>Desnvolvedor Pleno</h3>
              <div>

                <h4>Requisitos</h4>
                <ul>
                  <ListItem fontSize={17}>Conhecimento avançado em NodeJs</ListItem>
                  <ListItem fontSize={17}>Ter experiência em testes unitários</ListItem>
                  <ListItem fontSize={17}>Ter experiência em testes de integração</ListItem>
                  <ListItem fontSize={17}>Saber Clean Code (Clean Architecture)</ListItem>
                </ul>

                <p>Fonte: Geek Hunter</p>
              </div>
            </JobItem>
            <JobItem backgroundColor="#111">
              <h3>Desenvolvedor Sênior</h3>
              <div>
                <h4>Requisitos</h4>
                <ul>
                  <ListItem fontSize={17}>Definir arquitetura de projetos utilizando boas práticas como Clean Architecture,TDD e Design Patterns</ListItem>
                  <ListItem fontSize={17}>Liderar times e garantir entrega de resultados consistentes</ListItem>
                  <ListItem fontSize={17}>Gerir a performance do time</ListItem>

                </ul>
                <p>Fonte: Linkedin</p>
              </div>
            </JobItem>
            <JobItem backgroundColor="#fff">
              <h3>Desnvolvedor Pleno</h3>
              <div>
                <h4>Requisitos</h4>
                <ul>

                  <ListItem fontSize={17}>Ter experiência na construção de APIs utilizando NodeJs e Typescript</ListItem>
                  <ListItem fontSize={17}>TDD</ListItem>
                  <ListItem fontSize={17}>Conhecimento em Clean Code e Clean Architecture</ListItem>
                </ul>
                <p>Fonte: Geek Hunter</p>
              </div>
            </JobItem>
          </Jobs>
        </Content>
      </ContainerMaxWidth>
    </Color >

  )
}
