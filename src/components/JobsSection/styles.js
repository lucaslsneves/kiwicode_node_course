import styled from 'styled-components'

export const Color = styled.div`
  background-color: #fff;
  padding: 50px 0;
`
export const ImageCard = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  @media(max-width: 1200px){
    width: 330px !important;
    margin-right: 0 !important;
    margin-top: 10px !important;
    img {
      width: 330px !important;
    }
  }

  @media(max-width: 330px){
    width: 300px !important;
    margin-right: 0 !important;
    margin-top: 10px !important;
    img {
      width: 300px !important;
    }
  }
  img {
    margin-top: 10px;
  }
`
export const Content = styled.div`
@media(max-width: 1200px){
  padding: 0 20px;
}
  margin-top: 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  p {
    font-size:17px;
    line-height: 1.4;
    margin-bottom: 20px;
    max-width: 600px;
    > strong {
      
      border-bottom:2px solid #D50066;
      font-weight: 700;
    }
    
  }
  > div {
    @media(max-width: 1200px){
      :last-child {
        display:none;
      }
    }
  }
`

export const ContainerImages = styled.div`
  @media(max-width:1200px){
    flex-direction:column;
    align-items:center;
  }
  display:flex;
  margin-bottom: 20px;
  > div {
    margin-right: 100px;
    :last-child {
      margin-right: 0px;
    }
  }
  
   img {
    width: 500px;
   
  }
`
