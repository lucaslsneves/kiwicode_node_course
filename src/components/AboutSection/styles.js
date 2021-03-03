import styled from 'styled-components'

export const Color = styled.div`
  background-color: #111;
  padding: 20px 0;
`
export const Container = styled.div`

color:#fff;
  @media(max-width:1180px) {
    display:flex;
    flex-direction: column-reverse;
    
    justify-content:center;
    margin-top: 30px;
    padding: 20px; 
    img { 
      width: 300px;
    }
  }

  background-color: #111;
  padding: 50px 100px;
  margin-top: 120px;
  display:flex;
  justify-content:space-between;
  align-items: center;
`

export const Content = styled.div`
@media(max-width:1180px) {
  margin-bottom:30px;
}
  display:flex;
  flex-direction:column;
  p {
    font-size: 16px;
    text-align:distribute;
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
