import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  @media(max-width: 1220px){
    padding: 20px;
    margin-top: 30px!important;
    margin-bottom:30px !important;
  }
`
export const Grid = styled.div`
  @media(max-width: 800px){
    padding: 20px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    img {
      width: 100px !important;
    }
  }
  margin-top: 40px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:0px;
  justify-items:center;
  align-items:center;

   div {
    align-self:end;
    text-align:center;

    h3 {
      font-size:17px;
      font-weight: 400;
      color: #fff;
    }
  }
  img {
    padding: 20px;
    text-align:center;
    width: 150px;
  }
`
