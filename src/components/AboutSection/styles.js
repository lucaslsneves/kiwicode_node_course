import styled from 'styled-components'

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


  padding: 0 100px;
  margin-top:70px;
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
  color: #222;
  p {
    font-size: 17px;
    text-align:justify;
    max-width: 450px;
    line-height:1.4;
  }
`
export const Title = styled.div`
  border-left: 5px solid #00d56f;
  padding-left:15px;
  h1 {
    color: #222;
    font-size: 26px;
  }
  margin-bottom: 15px;
`
