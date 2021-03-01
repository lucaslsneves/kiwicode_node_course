import styled from 'styled-components'

export const Color = styled.section`
padding-top: 30px;
background-color:#fff;
padding-bottom: 30px;
@media(max-width: 800px){
    padding-right:20px; 
    padding-left:20px; 

    h1 {
        text-align:center;
    }
}
    .accordion {
        margin-top:20px;
    border-radius: 2px;
    
}

.accordion__item {
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom:15px;

  p {
      font-size:15px;
  }
}

.accordion__button {
    background-color: #fff;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    font-size: 20px;

    @media(max-width: 800px){
        font-size: 16px;
    }
    text-align: left;
    border: none;
}

.accordion__button:hover {
    background-color: #ddd;
}

.accordion__button:before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
}

.accordion__button[aria-expanded='true']::before,
.accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
}

[hidden] {
    display: none;
}

.accordion__panel {
    background-color:  #fff;
    padding: 20px;
}

/* -------------------------------------------------- */
/* ---------------- Animation part ------------------ */
/* -------------------------------------------------- */

@keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

`
