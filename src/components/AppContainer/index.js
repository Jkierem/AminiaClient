import React from 'react'

class AppContainer extends React.Component{
	render(){
		return(
			<div style={{
				"padding":"10px",
			}}>
				{this.props.children}
			</div>
		);
	}
}

export default AppContainer;
