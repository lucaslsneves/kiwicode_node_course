import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  @media(max-width: 1100px){
    justify-content:center;
    a {
      svg {
        width: 20px;  
        height:20px;
      }
    }
  }
  div {
    align-items:center;
    display: flex;
    color: #fff;
   h1 {
     margin-left: 10px;
     font-size: 15px;
     margin-right:10px;
     text-align:center;
     @media(max-width: 1100px){
        font-size: 12px;
     }
   }
  }
  > svg {
    cursor:pointer;
    :hover {
      opacity: 0.9;
    }
  }
`
