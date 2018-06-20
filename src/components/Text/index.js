import React from 'react'

class Text extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	getStyle= (color="black",wrap="break-word") =>({
		"color":color,
	  "wordWrap": wrap
	})

	render(){
		const { color , wrap } = this.props;
		const { text=this.props.children } = this.props;
		const textStyle = this.getStyle(color,wrap);
		return(
			<span style={textStyle}>{text}</span>
		);
	}
}

export default Text;
