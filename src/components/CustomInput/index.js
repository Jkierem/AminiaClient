import React from 'react'
import styled from 'styled-components'
import { Input , Styled , Utils } from 'juanform'

const StyledComponent = styled(Styled.Defaults.Input)`
  border: solid medium black;
  border-radius: 25px
  padding: 10px;
  font: inherit;
  &:focus {
    outline: none;
  }
`

export default Utils.createInput((props) => <Input as={StyledComponent} {...props} />);
