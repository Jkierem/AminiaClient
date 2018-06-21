import React from 'react'
import { capitalizeFirstLetter } from '../../resources/Utils'

class Arrow extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}

	checkProps = () => {
		let { size="small" , color="black" , direction="left" } = this.props;
		if( size !== "small" && size !== "medium" && size !== "large"){
			size = "small"
		}
		if( direction !== "up" && direction !== "down"
		&& direction !== "left" && direction !== "right" ){
			direction = "left"
		}
		return { size , color , direction };
	}

	getActualSize = (size) => {
		switch (size) {
			case "small":
				return "5px";
			case "medium":
				return "10px";
			case "large":
				return "15px";
			default:
				return "5px";
		}
	}

	getBorder = (dir) => (`border${capitalizeFirstLetter(dir)}`)

	getOpposite = (dir) => {
		switch (dir) {
			case "left":
				return "right";
			case "right":
				return "left";
			case "up":
				return "down";
			case "down":
				return "up";
			default:
				return "none"
		}
	}

	getStyle = () =>{
		const info = this.checkProps()
		const { size , color , direction } = info
		const actualSize = this.getActualSize(size);
		const partialStyle = {
			"width":"0",
			"height":"0"
		}
		const transparent = `${actualSize} solid transparent`
		const colored = `${actualSize} solid ${color}`
		let dirStyle = {
			"borderLeft":  transparent,
			"borderRight": transparent,
			"borderTop":   transparent,
			"borderBottom":transparent,
		}
		delete dirStyle[this.getBorder(direction)]
		dirStyle[this.getBorder(this.getOpposite(direction))] = colored;
		return {
			...partialStyle,
			...dirStyle
		}
	}

	render(){
		return(<span style={this.getStyle()} />);
	}
}

export default Arrow;
