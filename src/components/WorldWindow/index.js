import React from 'react'
import styled from 'styled-components'
import { flexStyle , boxStyle } from '../../resources/Styles'

export const World = styled.div`
  ${flexStyle()}
  ${boxStyle()}
  width: 100%;
	height: 100%;
  position: relative;
`

const WorldWindow = () => <World>I am ze wooooooorld!</World>

export default WorldWindow;
