import styled from 'styled-components'
import { pointer , noSelect , flexStyle , boxStyle , gridStyle } from '../../resources/Styles'
const _ = undefined;

export const SaveGrid = styled.div`
  ${gridStyle()}
  padding: 5px;
  margin: 5px;
  grid-gap: 10px;
  grid-template-areas:
    "name lvl"
    "loc prg";
`
export const Save = styled.div`
  ${pointer}
  ${noSelect}
  ${boxStyle("15px")}
  border: solid 5px black;
  margin: 10px;
  min-width: 250px;
`

export const SelectedSave = styled(Save)`
  border: solid 5px green;
`

const saveGridItem = (area,just="flex-start") => styled.div`
  ${flexStyle(_,just)}
  box-sizing: border-box;
  padding: 15px;
  grid-area: ${area}
`

export const Name = saveGridItem("name")
export const Level = saveGridItem("lvl","flex-end")
export const Location = saveGridItem("loc")
export const Progress = saveGridItem("prg","flex-end")
