import { pointer , noSelect , flexStyle , boxStyle } from '../../resources/Styles'
import styled from 'styled-components'

const commonRules = `
  padding: 10px;
  margin: 10px;
  position: relative;
  width: 100%;
`

const getBoxStyle = ({ color , textColor }) => boxStyle("10px",color,textColor)

export const enabled = styled.div`
  ${pointer}
  ${noSelect}
  ${flexStyle("row","space-around","center")}
  ${getBoxStyle}
  ${commonRules}
`

export const disabled = styled.div`
  ${noSelect}
  ${flexStyle("column")}
  ${boxStyle("10px","LightGray","DarkGray")}
  ${commonRules}
`
