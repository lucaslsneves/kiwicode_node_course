import styled from 'styled-components'
export const Jobs = styled.div`
@media(max-width: 1200px){
  margin-top: 0px;
  flex-direction:column;
  align-items:center;
  margin-bottom: 30px;
}
margin-top: 40px;
width:100%;
margin-bottom:120px;
  display:flex;
  justify-content:space-between;
`

export const JobItem = styled.div`
position:relative;
@media(max-width: 1200px){
 margin-top: 30px;
}
@media(max-width: 440px){
 width: 100%;
}
box-shadow: rgba(100,100,111,0.) 0px 7px 29px 0px;
display:flex;
flex-direction: column;
height:350px;
width:330px;
border-radius: 20px;
  background-color: ${props => props.backgroundColor};

h3 {
  padding-top: 20px;
  padding-bottom:20px;
  text-align:center;
  color: ${props => props.backgroundColor === '#fff' ? '#00d56f' : '#fff'};
  border-bottom: 1px solid ${props => props.backgroundColor === '#fff' ? '#222' : '#fff'};
}

> div {

  display:flex;
  flex-direction: column;
  padding:10px;
  color: ${props => props.backgroundColor === '#fff' ? '#222' : '#fff'};
 ul {
   margin-top: 10px;
  
  li {
    margin-left: 10px;
  }
 }
 p {
   color: #7d7d7d;
   position:absolute;
   left:5;
   bottom:0;
 }
}
`

export const Color = styled.div`
  background-color: #fff;
  padding: 50px 0;
  @media(max-width: 600px){
    h1 {
      font-size: 20px !important;
    }
    padding: 20px 0;
  }
`
export const ImageCard = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  @media(max-width: 1200px){
    width: 330px !important;
    margin-right: 0 !important;
    margin-top: 10px !important;
    img {
      width: 330px !important;
    }
  }

  @media(max-width: 330px){
    width: 300px !important;
    margin-right: 0 !important;
    margin-top: 10px !important;
    img {
      width: 300px !important;
    }
  }
  img {
    margin-top: 10px;
  }
`
export const Content = styled.div`
@media(max-width: 1200px){
  padding: 0 20px;

  > div {
    align-self: start;
  }

  p {
    align-self:start;
  }
}
  margin-top: 20px;
  margin-bottom:20px;
  display:flex;
  flex-direction:column;
  align-items:center;


  p {
    color:#fff;
    margin-top:20px;
    font-size:17px;
    line-height: 1.4;
    margin-bottom: 20px;
    max-width: 600px;
    > strong {
      border-bottom:2px solid #D50066;
      font-weight: 700;
    }
    
  }
`

export const ContainerImages = styled.div`
  @media(max-width:1200px){
    flex-direction:column;
    align-items:center;
  }
  display:flex;
  margin-bottom: 20px;
  > div {
    margin-right: 100px;
    :last-child {
      margin-right: 0px;
    }
  }
  
   img {
    width: 500px;
   
  }
`
