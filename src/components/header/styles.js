import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    h1 {
      font-size: 20px;
      color:#222;
      text-transform: uppercase;
    }
  }
`
export const Logo = styled.img`
  width: 60px;
  padding-right:5px;
`
