import styled from 'styled-components'
import React from 'react'

const Title = styled.div`
display:flex;
flex-direction: column;
align-items:center;
  > div {
   
    width:70px;
    height: 5px;
    background-color: #00d56f; 
  }
  @media(max-width:1180px) {
  
     h1 {
      font-size:23px !important;
    }
}
  h1 {
    color: ${props => props.color};
    font-size: 26px;
    margin-bottom: 10px;
  }
 
`

function SectionTitle ({ color, children }) {
  return <Title color={color}>
    <h1>{children}</h1>
    <div />
  </Title>
}

export default SectionTitle
