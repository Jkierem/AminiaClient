import React from 'react'
import styled from 'styled-components'
import { Field , Styled , Utils } from 'juanform'

export const StyledField = styled(Styled.Defaults.Field)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
`

export default Utils.createField((props) => <Field as={StyledField} {...props}/>);
