import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: white;
  background-color: #00b3f0;
  font-weight: 700;
  padding: 11px 20px 9px;
  line-height:28px;    
  border: 1px solid transparent;
  border-radius: 4px;
  min-width:100px;

  &:hover{
    background-color: #007bb5;
    transition: background-color 0.1s linear;
  }
  
  &, &:active{
    outline: 0;
  }

  &:active{
    background: #005f8c;
  }
`

export default Button