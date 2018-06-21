import React from 'react'
import { saveListStyle } from '../../resources/Styles'

export default function SaveList(props){
	return(
		<div style={saveListStyle}>
			{props.children}
		</div>
	)
};
