import styled from 'styled-components'

export const Container = styled.li`
position:relative;

 margin-bottom:10px;
 padding-left: 15px;
  span {
    margin-left: 4px;
    display: inline-flex;
    font-size: ${props => `${props.fontSize}px`};
  }
  ::after{
    content: " ";
    position: absolute;
    width: 8px;
    height: 8px;
    top: 8px;
    left: 0rem;
    border-radius: 100%;
    background:  #00d56f repeat scroll 0% 0%;
  }
`
