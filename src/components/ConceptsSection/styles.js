import styled from 'styled-components'

export const Color = styled.div`
  background-color: #fff; 
`
export const Container = styled.div`
  margin-top: 30px;
  padding-bottom:40px;
  padding-right:70px;
  padding-left: 70px;
  display:flex;
  justify-content: space-between;
  color: #222;

  @media(max-width:1200px){
    margin-top: 15px;
    padding:  20px;
    flex-direction: column;
    align-items: start;
  }
`
