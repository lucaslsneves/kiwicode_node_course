import styled from 'styled-components'

export const Color = styled.div`
  background-color: #fff;
  padding: 20px 0;
`
export const Container = styled.div`
  @media(max-width:1180px) {
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-top: 25px;
    padding: 20px; 
    img { 
      width: 300px;
    }
  }

  background-color: #fff;
  padding: 50px 100px;
  margin-top: 30px;
  display:flex;
  justify-content:space-between;
  align-items: center;
`

export const Content = styled.div`
@media(max-width:1180px) {
  margin-top:25px;
}
  display:flex;
  flex-direction:column;
  p {
    font-size: 17px;
    text-align:justify;
    max-width: 450px;
    line-height:1.4;
  }
`
export const Title = styled.div`
  border-left: 5px solid #D50066;
  padding-left:15px;
  @media(max-width:1180px) {
  
     h1 {
      font-size:23px !important;
    }
}

  margin-bottom: 15px;
`
