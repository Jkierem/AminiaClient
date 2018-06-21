import React from 'react'
import { menubarStyle } from '../../resources/Styles'

class MenuBar extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<div style={menubarStyle}>
				{this.props.children}
			</div>
		);
	}
}

export default MenuBar;
