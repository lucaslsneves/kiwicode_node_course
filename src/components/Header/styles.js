import styled from 'styled-components'

export const StyledHeader = styled.header`
@media(max-width:1020px) {
    justify-content:center;
    padding: 10px 0;
    padding-left:0;
  }
  
  padding: 25px 0;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  > div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 20px;
      color:#fff;
      text-transform: uppercase;
      font-weight: 400;
    }
  }
`
export const Logo = styled.img`
  width: 60px;
  padding-right:5px;
`
