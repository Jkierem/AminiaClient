import React from 'react'

class TextContainer extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	render(){
		return(
			<article style={{"padding":"10px"}}>
				{this.props.children}
			</article>
		);
	}
}

export default TextContainer;
