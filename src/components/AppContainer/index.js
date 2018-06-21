import React from 'react'
import "../../resources/Fonts/style.css";

class AppContainer extends React.Component{
	render(){
		return(
			<div style={{
				"padding":"10px",
				"fontFamily":"VT323",
				"fontSize":"120%"
			}}>
				{this.props.children}
			</div>
		);
	}
}

export default AppContainer;
