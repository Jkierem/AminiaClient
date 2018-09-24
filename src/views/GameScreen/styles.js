import styled from 'styled-components'
import { flexStyle } from '../../resources/Styles'

const itemWidth = ( startCol , endCol ) => (`
  grid-column-start: ${startCol};
  grid-column-end  : ${endCol};
`)
const itemHeight = ( startRow , endRow ) => (`
  grid-row-start: ${startRow};
  grid-row-end  : ${endRow};
`)

export const Screen = styled.div`
  display: grid;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(10,1fr);
  grid-gap: 5px;
  width: 100%;
  height: 100%;
`

export const MenuContainer = styled.div`
  ${itemHeight(1,11)}
  ${itemWidth(1,3)}
  ${flexStyle()}
`

export const WorldContainer = styled.div`
  ${itemHeight(1,8)}
  ${itemWidth(3,11)}
  ${flexStyle()}
`

export const LogContainer = styled.div`
  ${itemHeight(8,11)}
  ${itemWidth(3,11)}
  ${flexStyle()}
`
