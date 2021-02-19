import { ContainerMaxWidth } from '../MaxWidthContainer'
import SectionTitle from '../SectionTitle'
import { Color, Content, ImageCard, ContainerImages } from './styles'
export default function JobsSection () {
  return (

    <Color>
      <ContainerMaxWidth>
      <Content>
        <SectionTitle color={'#222'}>Vagas no mercado de trabalho</SectionTitle>
          <p>O mercado de trabalho está necessitando de profissionais
          que saibam desenvolver softwares de qualidade! <strong>Com o conhecimento do curso você estará apto
          para ocupar vagas de desenvolvedor nível Pleno ou até vagas nível Sênior</strong>!
        </p>
        <ContainerImages>
        <ImageCard>
        <img src="/mercado-de-trabalho.png"/>
        </ImageCard>
        <ImageCard>
        <img src="/mercado-de-trabalho2.png"/>
        </ImageCard>
        </ContainerImages>
        <ImageCard>
        <img src="/mercado-de-trabalho-4.png"/>
        </ImageCard>

        </Content>
      </ContainerMaxWidth>
    </Color >

  )
}
