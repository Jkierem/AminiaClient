import React from 'react'
import styled from 'styled-components'
import { Button , Styled , Utils } from 'juanform'

const StyledComponent = styled(Styled.Defaults.Button)`
  cursor: pointer;
  padding: 10px;
  font: inherit;
  background: none;
  color: green;
  border: solid medium green;
  border-radius: 15px;
  border-color: green;
  width: auto;
  margin: 5px;

  &:focus{
    outline: none;
  }

  &:hover{
    background-color: lightgreen;
  }
`
export default Utils.createButton((props) => <Button as={StyledComponent} {...props}/>)
