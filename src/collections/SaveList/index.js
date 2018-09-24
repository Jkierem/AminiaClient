import React from 'react'
import styled from 'styled-components'
import { flexStyle } from '../../resources/Styles'

const Comp = styled.section`
	${flexStyle("column")}
`

const SaveList = ({children}) => <Comp>{children}</Comp>

export default SaveList;
