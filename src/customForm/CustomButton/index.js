import React from 'react'
import styled from 'styled-components'
import { Button , Styled , Utils } from 'juanform'

const Primary = styled(Styled.Defaults.Button)`
  cursor: pointer;
  padding: 10px;
  font: inherit;
  background: none;
  color: green;
  border: solid medium green;
  border-radius: 15px;
  width: auto;

  &:focus{
    outline: none;
  }

  &:hover{
    background-color: lightgreen;
  }
`

const Secondary = styled(Primary)`
  color: blue;
  border: solid medium blue;
  &:hover{
    background-color: lightblue;
  }
`

export default Utils.createButton((props) => {
  if( props.secondary ){
    return(<Button as={Secondary} {...props}/>)
  }else{
    return(<Button as={Primary} {...props}/>)
  }
})
