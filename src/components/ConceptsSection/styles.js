import styled from 'styled-components'

export const Color = styled.div`
  background-color: #fff; 
  div {
    h1 {
      text-align:center;
    }
  }
`
export const Container = styled.div`
margin-bottom:120px;
  margin-top: 30px;
  padding-bottom:40px;
  padding-right:70px;
  padding-left: 70px;
  display:flex;
  justify-content: space-between;
  color: #fff;

  @media(max-width:1200px){
    margin-top: 30px;
    margin-bottom:30px;
    padding:  20px;
    flex-direction: column;
    align-items: start;
  }
`
