import styled from 'styled-components'
import React from 'react'

const Title = styled.div`
  border-left: 5px solid #D50066;
  padding-left:15px;
  @media(max-width:1180px) {
  
     h1 {
      font-size:23px !important;
    }
}
  h1 {
    color: ${props => props.color};
    font-size: 26px;
  }
  margin-bottom: 15px;
`

function SectionTitle ({ color, children }) {
  return <Title color={color}>
    <h1>{children}</h1>
  </Title>
}

export default SectionTitle
