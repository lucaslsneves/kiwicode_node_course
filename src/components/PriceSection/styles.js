import styled from 'styled-components'

export const Container = styled.div`
 padding: 40px 0;
 display: flex;
 justify-content:space-between;
 align-items:center;
 color: #fff;

  div {
    display:flex;
    flex-direction:column;
    align-items:start;
  }
 h1 {
   color:#00d56f;
 }

 a {
   :hover {
     opacity: 0.9;
     transition: 0.2s linear;
   }
  > span {
     margin-left: 50px;
     font-weight: bold;
     font-size: 22px;
   }
   justify-content:space-between;
   width: 350px;
   height: 70px;
   display:flex;
   cursor: pointer;
   background-color: #fff;
   margin-top: 30px;
   text-transform: uppercase;
   font-size: 22px;
   border-radius: 15px;
   border:0;
   color:#00d56f;
   align-items:center;
   h2 {
     height: 100%;
   display:flex;
   
   flex-direction: column;
   align-items:center;
   justify-content:center;
    width: 120px;
    text-align:center;
    border-radius: 15px;
    font-size: 20px;
    color: #fff;
    background-color: #00d56f;

    span {
      font-size: 17px;
    }
   }
   @media(max-width: 500px){
   width: 100%;
   > span {
     margin-left: 25px;
     
   }
 }
 }
 @media(max-width: 1200px){
   flex-direction: column;
   align-items:center;
   justify-content:center;
   padding:30px 20px;

   h1 {
   color:#00d56f;
   font-size: 22px;
 }
   img {
     margin-top: 15px;
     width: 300px;
   }
   div {
     > div {
       align-self:center; 
     }
   }
 }
`
export const Pricing = styled.div`
  margin-top:30px;
  margin-bottom:30px;
  display: inline-block;
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 25px;
  border: 1px solid #00d56f;
  color: #00d567;
 
  span {
    font-weight: 400;
    font-size: 27px;
  }
 @media(max-width:1200px){
   font-size:22px;
   span {
     font-size: 24px;
   }
 }
  
`
