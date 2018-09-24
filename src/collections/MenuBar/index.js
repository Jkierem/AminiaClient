import React from 'react'
import styled from 'styled-components'
import { flexStyle , boxStyle } from '../../resources/Styles'

const Comp = styled.main`
  ${flexStyle("column","flex-start")}
  ${boxStyle()}
  padding: 10px;
  position: relative;
  height: 100%;
  width: 100%;
`

const MenuBar = (props) => <Comp>{props.children}</Comp>

export default MenuBar;
