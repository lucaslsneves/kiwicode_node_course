import styled from 'styled-components'
export const Color = styled.section`
  background-color: #fff;
`
export const Bonus = styled.div`
position:relative;
color: #222;
padding: 15px;
border-radius: 20px;
  display:flex;
  flex-direction:column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-items:center;
  height: 360px;
  width: 300px;
  h2 {
    text-align:center;
    margin-bottom: 15px;
  }

  p {
    text-align:center; 
    line-height: 1.4;
    font-size: 16px;
  }

  img {
    width: 120px;
    margin-bottom: 15px;
  }

  div {
    position:absolute;
    bottom:10px;
    font-size: 20px;
    span {
      text-decoration:line-through;
    }
    strong {
      color: #00d56f;
      text-transform: uppercase;
    }
  }

  @media(max-width: 1200px){
    width: 100%;
    margin-bottom: 15px;
  }

  @media(max-width: 330px){
    height: 380px;
  }
`

export const Container = styled.div`
padding: 0 100px;
padding-bottom: 40px;
margin-top: 30px;
  display:flex;
  justify-content:space-between;

  @media(max-width: 1200px){
    margin-top: 15px;
    padding: 20px;
    flex-direction:column;
    align-items:center;
  }
`
