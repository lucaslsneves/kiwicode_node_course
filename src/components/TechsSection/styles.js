import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 60px;

  @media(max-width: 1220px){
    padding: 20px;
  }
`
export const Grid = styled.div`
  @media(max-width: 800px){
    padding: 20px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    img {
      width: 130px !important;
    }
  }
  margin-top: 40px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:0px;
  justify-items:center;
  align-items:center;
  img {
    padding: 20px;
    text-align:center;
    width: 150px;
    background-color: #000;
  }
`
