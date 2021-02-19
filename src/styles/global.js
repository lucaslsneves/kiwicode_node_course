import { createGlobalStyle } from 'styled-components'
import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'
export default createGlobalStyle`
  .container {
  padding: 40px;
  background: #419be0;
}

.slick-slide img {
  margin: auto;
}
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html,body {
    height: 100%;
  }
  body,input,button {
    font: 14px 'Montserrat',sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
