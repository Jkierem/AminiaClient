import React from 'react'
import styled from 'styled-components';
import { flexStyle } from '../../resources/Styles'
import "../../resources/Fonts/style.css";

const StyledComp = styled.div`
	${flexStyle()}
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	padding: 10px;
	font-family: VT323;
	font-size: 120%;
`

const AppContainer = ({children}) => <StyledComp>{children}</StyledComp>

export default AppContainer;
