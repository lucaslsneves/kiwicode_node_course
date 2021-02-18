import styled from 'styled-components'

export const Container = styled.div`
  @media(max-width:1020px) {
    display:flex;
    flex-direction: column;
    justify-content:center;
    padding: 20px;
    img {
      margin-top: 10px;
      width: 300px;
    }
    > div {
      h2 {
        font-size:20px !important;
      }
    }
  }
  padding: 40px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items:center;
  > div {
    max-width: 440px;
    color: white;

    p {
      max-width: 400px;
      font-size: 20px;
      text-align:justify;
      margin-bottom:10px;
    }
    .list-item{
      margin-bottom: 10px;
    }
   h2 {
     line-height:1.4;
    font-size: 24px;
     color: #00d56f;
     margin-bottom: 15px;
      font-weight:400;
     strong {
       font-weight:700;
       border-bottom: 2px solid #D50066;
     }
   }
   ul{
     margin-left:15px;
   }
   
   
  }
`
export const Title = styled.div`
@media(max-width:1020px) {
  justify-content:center;
  h1 {
    font-size: 28px !important;
    text-align: center;
    span {
       display: block;
    }
  }
}
  display:flex;
  
  align-items:center;
  margin-bottom:15px;
  h1{
      font-size: 36px;
    }
   > img {
      margin-left: 10px;
      width: 50px;
    }
`
